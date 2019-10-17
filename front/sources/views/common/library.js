import { JetView } from 'webix-jet';
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
			onClick: {
				'fa-eye': (e, id) => {
					this.showBookCard(id);
				},
				'fa-edit': (e, id) => {
					this.showBookCard(id);
				},
				'fa-trash': (e, id) => {
					this.removeBook(id);
				}
			}
		};

		return {
			rows: [header, dtable]
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
		this.booksArr = this.convertDates(dbData.json());
	}

	async getFiles() {
		const dbData = await filesModel.getDataFromServer();
		this.filesArr = dbData.json();						
	}

	convertDates(booksArr) {
		let date;

		booksArr = booksArr.map((el) => {
			date = el.yearOfPublication;
			el.yearOfPublication = date ? new Date(date) : '';
			return el;
		});

		return booksArr;		
	}

	checkFiles() {
		this.booksArr.forEach((book, i) => {
			const isFiles = this.filesArr.find((el) => el.book_id === book.id);
			
			if(isFiles) {
				this.booksArr[i].ebook = 'yes';
			}
			else {
				this.booksArr[i].ebook = 'no';
			}
		});
	}

	showBookCard(id) {
		const book = this.booksArr.find(el => el.id == id);
		this._bookCard.showPopup(book);
	}

	removeBook(id) {
		booksModel.removeItem(id).then(() => {
			this.grid.remove(id);
		});		
	}

	addBook() {
		this._bookCard.showPopup();
	}
}