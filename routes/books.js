import {Router} from 'express';
import Book from '../models/books';
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
	Book.find({_id: req.params.bookId}, (err, data) => {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
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
		{_id: req.body.id},
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
		(err, results) => {
			if (!err) {
				res.send(results);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});

router.delete('/', (req, res) => {
	Book.findOneAndDelete(
		{ _id: req.body.row },
		(err, results) => {
			if (!err) {
				res.send(results);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});


export default router;