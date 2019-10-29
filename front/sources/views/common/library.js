import {JetView} from 'webix-jet';
import booksModel from '../../models/books';
import filesModel from '../../models/files';

export default class Library extends JetView {
	constructor(app, libraryConfig, bookCard) {
		super(app);
		this.libraryConfig = libraryConfig;
		this.bookCard = bookCard;
	}

	config() {
		const header = {
			type: 'header',
			template: '<i class="fas fa-book"></i> List of books',
			css: 'center page_header'
		};

		const dtable = {
			view: 'datatable',
			id: 'dtLibrary',
			select: true,
			columns: [
				{
					id: 'id',
					hidden: true,
				},
				{
					id: 'bookTitle',
					sort: 'text',
					fillspace: 1,
					header: ['Title', {content: 'textFilter'}]
				},
				{
					id: 'authorName',
					sort: 'text',
					fillspace: 1,
					header: ['Author', {content: 'textFilter'}]
				},
				{
					id: 'genres',
					sort: 'text',
					width: 80,
					css: 'center',
					header: ['Genres', {content: 'selectFilter'}]
				},
				{
					id: 'countryOfPublication',
					sort: 'text',
					width: 80,
					css: 'center',
					header: ['Country', {content: 'selectFilter'}]
				},
				{
					id: 'yearOfPublication',
					sort: 'date',
					width: 80,
					css: 'center',
					format: webix.Date.dateToStr('%Y'),
					header: ['Year', {content:"dateRangeFilter"}]
				},
				{
					id: 'availableCopies',
					width: 80,
					css: 'center',
					header: 'Available'
				},
				{
					id: 'ebook',
					header: ['eBook', {content:"selectFilter"}],
					width: 70,
					template: (obj) => {
						return obj.ebook==='yes' ? '<i class="fas fa-check"></i>' : ''
					}					
				},
				{
					id: 'viewCol',
					header: 'View',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-eye"></i>'
				},
				{
					id: 'editCol',
					header: 'Edit',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-edit"></i>'
				},
				{
					id: 'removeCol',
					header: 'Remove',
					css: 'center',
					width: 70,
					template: '<i class="fas fa-trash"></i>'
				}
			],
			scheme: {
				$init: function (obj) {
					obj.yearOfPublication = obj.yearOfPublication ? new Date(obj.yearOfPublication) : '';
				}
			},
			onClick: {
				'fa-eye': (e, id) => {
					this._bookCard.showPopup(id);
				},
				'fa-edit': (e, id) => {
					this._bookCard.showPopup(id);
				},
				'fa-trash': (e, id) => {
					this.removeBook(id);
				}
			}
		};

		const search = {
			view: 'search',
			id: 'librarySeach',
			placeholder: 'Search',
			on: {
				onEnter: () => this.search(),
				onSearchIconClick: () => this.search()
			}
		};

		const savePDF = {
			view: 'button',
			type: 'form',
			label: 'Save as PDF',
			width: 125,
			click: () => {
				webix.toPDF($$('dtLibrary'), {
					columns: {
						'bookTitle': true,
						'authorName': true,
						'genres': true,
						'countryOfPublication': true,
						'yearOfPublication': true
					},
					filename: 'Books list'
				});
			}
		};

		const saveDOCX = {
			view: 'button',
			type: 'form',
			label: 'Save as DOCX',
			width: 125,
			click: () => this.saveDOCX()
		};

		return {
			rows: [
				header, search, dtable, 
				{
					margin: 20,
					cols: [
						{},
						savePDF,
						saveDOCX,
						{}
					]
				}
			]
		};
	}

	async init() {
		this.grid = $$('dtLibrary');

		switch (this.libraryConfig.role) {
			case 'reader': 
				this.grid.getColumnConfig('editCol').hidden = true;
				this.grid.getColumnConfig('removeCol').hidden = true;
				break;
			case 'librarian':
				this.grid.getColumnConfig('viewCol').hidden = true;
				break;
		}
		this.grid.refreshColumns();
		await this.getData();
		await this.getFiles();
		this.checkFiles();
		this.grid.parse(this.booksArr);
		this._bookCard = this.ui(this.bookCard);
	}

	async getData() {		
		const userId = this.getParam("id", true);
		const dbData = await booksModel.getDataFromServer(userId);
		this.booksArr = dbData.json();
	}

	async getFiles() {
		const dbData = await filesModel.getDataFromServer();
		this.filesArr = dbData.json();						
	}

	checkFiles() {
		this.booksArr.forEach((book, i) => {
			const isFiles = this.filesArr.find((el) => el.bookId === book.id);
			
			if(isFiles) {
				this.booksArr[i].ebook = 'yes';
			}
			else {
				this.booksArr[i].ebook = 'no';
			}
		});
	}

	removeBook(id) {
		booksModel.removeItem(id).then(() => {
			this.grid.remove(id);
		});		
	}

	addBook() {
		this._bookCard.showPopup();
	}

	search() {
		const searchInput = $$('librarySeach');
		const value = searchInput.getValue();
		booksModel.search(value).then((res) => {
			this.grid.clearAll();
			this.grid.parse(res.json());
		});
		searchInput.setValue('');
	}

	saveDOCX() {
		const dtData = $$('dtLibrary').serialize();
		let docData = '';
		const dateFormat = webix.Date.dateToStr('%Y');

		dtData.forEach((el) => {
			for (var key in el) {
				switch(key){
					case 'bookTitle': docData += `Title: ${el[key]};\n`;
						break;
					case 'authorName': docData += `Author: ${el[key]};\n`;
						break;
					case 'genres': docData += `Genre: ${el[key]};\n`;
						break;
					case 'countryOfPublication': docData += `Country of publication: ${el[key]};\n`;
						break;
					case 'availableCopies': docData += `Available copies: ${el[key]};\n`;
						break;
					case 'publishingHouse': docData += `Publishing house: ${el[key]};\n`;
						break;
					case 'numberOfPages': docData += `Number of pages: ${el[key]};\n`;
						break;
					case 'yearOfPublication': docData += `Year of publication: ${dateFormat(el[key])};\n`;
						break;
				}
			}
			docData += '\n\n'
		});

		const link = document.createElement('a');
		link.download = 'data.doc';

		const blob = new Blob([docData], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
		const reader = new FileReader();
		
		reader.readAsDataURL(blob);
		reader.onload = function() {
			link.href = reader.result;
			link.click();
		};
	}
}