import {Router} from 'express';
import Book from '../models/books';
import connection from '../db';
import mysql from 'mysql2';

const router = Router();

router.get('/', async (req, res) => {
	const userId = req.query.userId;
	try {
		const books = await Book.find({});


	}
	catch (err) {
		res.status(500);
	}
	// Book.find({}, function (err, results) {
	// 	if(!err) {
	// 		res.status(200).send(results);
	// 	}
	// 	else {
			
	// 	}			
	// });
	const query = mysql.format('SELECT books.*, (SELECT count(*) FROM likes where likes.book_id = books.id) count_likes, likes.user_id, orders.order_date FROM books LEFT OUTER JOIN likes ON books.id = likes.book_id and likes.user_id = ? LEFT OUTER JOIN orders ON books.id = orders.book_id and orders.user_id = ?', [userId, userId], [bookId, userId]);
	connection.query(query,
		function (err, results) {
			if(!err) {
				res.status(200).send(results);
			}
			else {
				res.status(500);
			}			
		}
	);
});

router.post('/', function (req, res) {
	const book = new Book(req.body);
	book.save((err, item) => {
		const response = {};
		if (err) {
			response.status = 'error';
			response.data = err;
		}
		else {
			response.status = 'server';
			response.data = item;
		}
		res.send(response);
	});
});

router.put('/', function (req, res, next) {
	Book.findOneAndUpdate(
		{id: req.body},
		{},
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				console.log(err);
				res.status(500);
			}
		}
	);
});

router.delete('/', function (req, res) {
	Book.findOneAndDelete(
		{ id: req.body.row },
		function (err, result) {
			if (!err) {
				res.send(result);
			}
			else {
				res.status(500);
			}
		}
	);
});


export default router;