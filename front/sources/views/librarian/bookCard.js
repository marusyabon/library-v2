import {JetView} from 'webix-jet';
import booksModel from '../../models/books';
import {DUMMYCOVER} from '../../consts';
import {toggleElement, addItem, updateItem, convertDatesInArray} from '../../scripts'; 
import filesModel from '../../models/files';
import Library from '../common/library';

export default class BookCard extends JetView {
	config() {

		const bookCover = {
			localId: 'bookCover',
			width: 120,
			height: 180,
			css: 'book_cover',
			template: (url) => {
				return `<div style="background-image: url(${url})" ></div>`;
			}
		};

		const bookCard = {
			localId: 'bookCardLibrarian',
			view: 'form',
			borderless: true,
			elements: [
				{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'bookTitle' },
				{ view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'authorName' },
				{ view: 'combo', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', options: [
					'', 'Fiction', 'Fantasy', 'Thriller', 'Horror', 'Mystery', 'Historical', 'Westerns', 'Family', 'Dark comedy'
				]},
				{ view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'countryOfPublication' },
				{ view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishingHouse' },
				{ view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'availableCopies' },
				{ view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'numberOfPages' },
				{ view: 'datepicker', label: 'Year of publication', labelWidth: 130, width: 310, labelAlign: 'right', type: 'year', format: '%Y', name: 'yearOfPublication' },
				{ view: 'text', label: 'Cover photo', labelWidth: 130, width: 310, labelAlign: 'right', name: 'coverPhoto' }
			]
		};

		const addTextFile = {
			view: 'uploader',
			label: '<i class="fas fa-file-upload"></i> Upload text file',
			localId: 'bookFiles',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: () => ({
				userId: this.userId,
				bookId: this.bookId
			}),
			accept: 'text/plain, application/pdf, .doc, .docx',
			upload: 'http://localhost:3000/files/upload/text',
			link: 'filesList'
		};

		const filesList = {
			view: 'list',
			type: 'uploader',
			id: 'filesList',
			autoheight:true, 
			borderless:true
		};

		const addAudioFile = {
			view: 'uploader',
			label: '<i class="fas fa-music"></i> Upload audio',
			localId: 'audioFiles',
			type: 'htmlbutton',
			autosend: false,
			width: 150,
			formData: () => {
				return {
					userId: this.userId,
					bookId: this.bookId
				};
			},
			accept: '.mp3',
			upload: 'http://localhost:3000/files/upload/audio',
			link: 'audioList'
		};

		const audioList = {
			view: 'list',
			type: 'uploader',
			id: 'audioList',
			autoheight:true, 
			borderless:true
		};

		const availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: '#name# <span class="list_button"><i class = "fas fa-times"></i></span>',
			on: {
				onItemClick: (id) => {
					//remove file and record in DB
				}
			}
		};

		const availableAudioFiles = {
			view: 'activeList',
			localId: 'availableAudioFiles',
			template: '#name# <span class="list_button"><i class = "fas fa-times"></i></span>',
		};

		const saveBtn = {
			view: 'button',
			type: 'form',
			label: 'Save',
			width: 80,
			click: () => {
				this.saveForm();
			}
		};

		return {
			view: 'popup',
			position: 'center',
			maxHeight: 550,
			body: {
				view: 'scrollview',
				body: {
					rows: [
						bookCover, 
						bookCard,
						{
							view: 'template',
							template: 'Files',
							autoheight: true,
							css: 'center'
						},
						{height: 2},
						availableTextFiles,
						availableAudioFiles,
						filesList,
						audioList,
						{height: 15},
						{ 
							localId: 'addingFilesButtons',
							margin: 10,
							cols: [ {}, addTextFile, addAudioFile, {} ] 
						},
						{height: 1},
						{
							paddingY: 10,
							paddingX: 15,
							margin: 10,
							borderless: true,
							cols: [{}, saveBtn, {}]
						}
					]
				}				
			}
		};
	}

	init() {
		this.form = this.$$('bookCardLibrarian');
	}

	showPopup(id) {
		this.clearForm();
		this.isNew = id ? false : true;
		this.bookId = id || '';
		this.userId = this.getParam('id', true);

		filesModel.getItems(this.bookId).then((dbData) => {
			const filesArr = dbData.json();
			const textFiles = [];
			const audioFiles = [];

			filesArr.forEach((file) => {
				switch(file.data_type) {
					case 'text':
						textFiles.push(file);
						break;
					case 'audio':
						audioFiles.push(file);
						break;
				}
			});

			this.$$('availableTextFiles').parse(textFiles);
			this.$$('availableAudioFiles').parse(audioFiles);
		});

		toggleElement(!this.isNew, this.$$('bookCover'));
		toggleElement(!this.isNew, this.$$('addingFilesButtons'));

		if(!this.isNew) {
			booksModel.getBook(id).then((bookData) => {
				const book = bookData.json()[0];
				this.form.setValues(book);
				this.$$('bookCover').setValues(book.cover_photo || DUMMYCOVER);
			});						
		}		

		this.getRoot().show();	
	}

	saveForm() {
		const data = this.form.getValues();

		const successAction = (newData) => {
			this.webix.message('Success');
			const booksArr = convertDatesInArray(newData.json());
			$$('dtLibrary').parse(booksArr);
			this.hideWindow();
		};

		if(this.form.validate()) {
			if(this.isNew) {
				addItem(booksModel, data, successAction);				
			}

			else {
				updateItem(booksModel, data, successAction);
			}

			this.$$('bookFiles').send((response) => {
				if(response){
					this.webix.message(response.message);
				}
			});

			this.$$('audioFiles').send((response) => {
				if(response){
					this.webix.message(response.message);
				}
			});
		}		
	}

	hideWindow() {
		this.clearForm();
		this.getRoot().hide();
	}

	clearForm (){
		this.form.clearValidation();
		this.form.clear();
		this.$$('bookFiles').files.clearAll();
		this.$$('audioFiles').files.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
	}
}