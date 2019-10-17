import { JetView } from 'webix-jet';
import likesModel from '../../models/likes';
import {toggleElement} from '../../scripts'; 
import {DUMMYCOVER, SUCCESS_SQL, SUCCESS_MONGO} from '../../consts'; 
import filesModel from '../../models/files';
import ordersModel from '../../models/orders';
import CommentClass from './commentObj';

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
			localId: 'bookCardReader',			
			view: 'form',
			elements: [
				{ view: 'text', label: 'Title', labelWidth: 130, width: 310, labelAlign: 'right', name: 'bookTitle', readonly: true },
				{ view: 'text', label: 'Author', labelWidth: 130, width: 310, labelAlign: 'right', name: 'authorName', readonly: true },
				{ view: 'text', label: 'Genres', labelWidth: 130, width: 310, labelAlign: 'right', name: 'genres', readonly: true },
				{ view: 'text', label: 'Country', labelWidth: 130, width: 310, labelAlign: 'right', name: 'countryOfPublication', readonly: true },
				{ view: 'text', label: 'Publishing house', labelWidth: 130, width: 310, labelAlign: 'right', name: 'publishingHouse', readonly: true },
				{ view: 'text', label: 'Available copies', labelWidth: 130, width: 310, labelAlign: 'right', name: 'availableCopies', readonly: true },
				{ view: 'text', label: 'Pages', labelWidth: 130, width: 310, labelAlign: 'right', name: 'numberOfPages', readonly: true }
			]			
		};

		const availableTextFiles = {
			view: 'activeList',
			localId: 'availableTextFiles',
			template: '#name#<span class="list_button"><i class = "fas fa-download"></i></span>',
			on: {
				onItemClick: (id) => {
					const bookName = this.$$('availableTextFiles').getItem(id).name;

					filesModel.downloadItem(id).then((res) => {
						webix.html.download(res, bookName);
					});
				}
			}
		};

		const availableAudioFiles = {
			view: 'activeList',
			localId: 'availableAudioFiles',
			type:{
				height:100
			},
			template: "#name#<audio controls src='http://localhost:3000/audio/#id#'></audio>"
		};

		const orderBook = {
			view: 'button',
			localId: 'orderBook',
			type: 'htmlbutton',
			label: '<i class="far fa-hand-paper"></i> Order',
			width: 100,
			click: () => { 
				this.orderBook();
			}
		};

		const downloadBook = {
			view: 'button',
			localId: 'downloadBook',
			type: 'icon',
			icon: 'fas fa-download',
			width: 60,
			click: () => { 
				this.orderBook();
			}
		};

		const likeBook = {
			view: 'button',
			localId: 'likeButton',
			css: 'like_button',
			type: 'icon', 
			icon: 'far fa-heart',
			width: 45,
			click: () => { 
				this.likeBook();
			}
		};

		const toggleCommentsBtn = {
			view: 'button',
			localId: 'commentButton',
			type: 'htmlbutton',
			label: 'Comments <i class="fas fa-angle-down">',
			width: 120,
			click: () => { 
				this.Comment.toggleComments(this.commentsGot, this.$$('commentButton'));
			}
		};

		const addComment = {
			margin: 5,
			paddingY: 10,
			paddingX: 17,
			rows: [
				{
					view:'textarea',
					localId: 'userComment',
					label: 'Comment',
					labelPosition: 'top',
					height: 80
				},
				{
					cols: [
						{},
						{
							view: 'button',
							localId: 'saveCommentBtn',
							type: 'form',
							label: 'Send',
							width: 80,
							click: () => {
								this.Comment.saveComment(this.$$('userComment'));
							}
						}
					]
				}
			]
		};

		const comments = {
			rows: [
				{
					paddingY: 10,
					cols: [
						{}, toggleCommentsBtn, {}
					]
				},
				{
					localId: 'commentLayout',
					hidden: true,
					rows: []
				}
			]
		};

		return {
			view: 'popup',
			position:'center',
			maxHeight: 550,
			body:{
				view: 'scrollview',
				body: {
					rows: [
						bookCover, bookCard, availableTextFiles, availableAudioFiles,
						{
							paddingY: 10,
							paddingX: 15,
							margin: 10,
							cols: [
								orderBook, downloadBook, {}, likeBook
							]
						},
						addComment,
						comments
					] 
				}
			}
		};
	}
	
	showPopup(book) {
		this.likeButton = this.$$('likeButton');
		this.form = this.$$('bookCardReader');
		this.filesList = this.$$('availableTextFiles');
		this.toggleCommentsBtn = this.$$('commentButton');
		this.orderBtn = this.$$('orderBook');
		this.commentLayout = this.$$('commentLayout');
		this.book = book;
		this.bookId = book.id;
		this.userId = this.getParam('id', true);
		this.Comment = new CommentClass(this.userId, this.bookId, this.commentLayout);
		
		this.clearForm();
		this.form.setValues(book);
		this.$$('bookCover').setValues(book.cover_photo || DUMMYCOVER);
		this.likeButton.define('badge', book.count_likes || '0');
		this.getFiles();
		this.Comment.getComments();	
		this.commentsGot = true;	
		
		toggleElement(book.book_file, this.$$('downloadBook'));
		toggleElement(book.available_copies, this.$$('orderBook'));
		this.toggleLike(book.userId == this.userId);
		this.toggleOrder(book.order_date);

		this.getRoot().show();
	}

	getFiles() {
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
	}

	orderBook() {
		const order = {
			userId: this.userId,
			bookId: this.bookId,
			orderDate: new Date()
		};

		ordersModel.addOrder(order).then((response) => {
			const status = response.json().serverStatus;
			if(status == SUCCESS_SQL || SUCCESS_MONGO) {
				this.setOrderedVal();
			}
		});
	}

	setOrderedVal() {
		this.orderBtn.define('label', 'Ordered'); 
		this.orderBtn.refresh();
		this.orderBtn.disable();
	}

	unsetOrderedVal() {
		this.orderBtn.define('label', '<i class="far fa-hand-paper"></i> Order');  
		this.orderBtn.refresh();
		this.orderBtn.enable();
	}

	toggleOrder(ordered) {
		if(ordered) {
			this.setOrderedVal();
		}
		else {
			this.unsetOrderedVal();
		}
	}

	likeBook() {
		if(this.book.userId == this.userId) {
			likesModel.removeLike(this.userId, this.bookId).then((response) => {
				const status = response.json().serverStatus;
				if(status == SUCCESS) {
					this.unsetLike();
				}
			});
		}
		else {
			likesModel.addLike(this.userId, this.bookId).then((response) => {
				const status = response.json().serverStatus;
				if(status == SUCCESS) {
					this.setLike();
				}
			});
		}	
	}	

	toggleLike(condition) {
		if(condition) {
			this.setLike();
		}
		else {
			this.unsetLike();
		}
	}

	setLike() {
		this.likeButton.define('icon', 'fas fa-heart');
		this.likeButton.refresh();
	}

	unsetLike() {
		this.likeButton.define('icon', 'far fa-heart');
		this.likeButton.refresh();
	}

	clearForm() {
		this.form.clear();
		this.filesList.clearAll();
		this.$$('availableTextFiles').clearAll();
		this.$$('availableAudioFiles').clearAll();
		this.Comment.clearComments();
	}
}