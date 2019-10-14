import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookssSchema = new Schema({
	coverPhoto: String,
	bookTitle: String,
	numberOfPages: Number,
	authorName: String,
	publishingHouse: String,
	countryOfPublication: String,
	genres: String,
	availableCopies: Number,
	yearOfPublication: Date,
	isFiles: Boolean
});

BookssSchema.set('toJSON', {
	virtuals: true,
	transform: function (doc, ret) {
		delete ret._id;
		delete ret.__v;
	}
});

const Book = mongoose.model('Book', BookssSchema);

export default Book;