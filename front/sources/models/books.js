import { URL } from '../consts';

class BooksModel {
	constructor() {
		this._data = [];
		this._url = `${URL}/books/`;
	}

	getDataFromServer(id) {
		const userId = {userId: id};
		return webix.ajax().get(this._url, userId);
	}

	getBook(bookId) {
		return webix.ajax().get(`${this._url}${bookId}`);
	}

	addItem(data, func) {
		return webix.ajax().post(this._url, data, func);
	}

	updateItem(data) {
		return webix.ajax().put(this._url, data);
	}

	removeItem(id) {
		return webix.ajax().del(`${this._url}${id}`);
	}

	search(req) {
		return webix.ajax().get(`${this._url}search/${req}`);
	}
}

export default new BooksModel();