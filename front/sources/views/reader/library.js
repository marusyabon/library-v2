import {JetView} from "webix-jet";
import Library from '../common/library';
import BookCard from './bookCard';

export default class readerLibrary extends JetView {
	config() {
		const libraryConfig = {
			role: 'reader'
		};

		return {
			rows: [
				new Library(this.app, libraryConfig, BookCard)
			]
		};
	}
}