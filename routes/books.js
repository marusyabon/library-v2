import {Router} from 'express';
import Book from '../models/books';
import mongoose from 'mongoose';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

router.get('/', (req, res) => {
	Book.find({}, (err, data) => {
		if (!err) {
			res.send(data);
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.get('/:bookId', (req, res) => {
	Book.aggregate([
		{ $match: { _id: mongoose.Types.ObjectId(req.params.bookId) } },
		{ $lookup: {
			from: 'files',
			localField: '_id',
			foreignField: 'bookId',
			as: 'files'
		}		
		},
		{ $addFields: { 'id': '$_id'}},
		{ $limit: 1 }
	]).exec((err, data) => {
		if (!err) {
			data[0].files.forEach((el) => {
				el.id = el._id;
			});
			res.send(data[0]);
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.post('/', (req, res) => {
	const book = new Book(req.body);
	book.save((err, results) => {
		if (!err) {
			res.send(results);
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.put('/', (req, res) => {	
	Book.findOneAndUpdate(
		{_id: req.body._id},
		{
			$set: {
				ebook: req.body.ebook,
				bookTitle: req.body.bookTitle,
				authorName: req.body.authorName,
				genres: req.body.genres,
				countryOfPublication: req.body.countryOfPublication,
				publishingHouse: req.body.publishingHouse,
				availableCopies: req.body.availableCopies,
				numberOfPages: req.body.numberOfPages,
				yearOfPublication: req.body.yearOfPublication,
				coverPhoto: req.body.coverPhoto
			}
		},
		(err, data) => {
			if (!err) {
				res.send(data);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});

router.delete('/:id', (req, res) => {
	Book.findOneAndDelete(
		{ _id: req.params.id },
		(err, data) => {
			if (!err) {
				res.send(data);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});

export default router;