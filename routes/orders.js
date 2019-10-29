import { Router } from 'express';
const router = Router();
import Order from '../models/orders';
import Book from '../models/books';
import mongoose from 'mongoose';

router.get('/:userId', function (req, res) {
	Order.aggregate([
		{ $match : { 
			userId: req.params.userId,
			returnDate: null
		} },
		{ $lookup: {
			from: 'books',
			localField: 'bookId',
			foreignField: '_id',
			as: 'book'
		}
		},
		{ $addFields: { 'id': '$_id'}},
		{ $unwind: '$book' }
	]).exec((err, data) => {
		if (!err) {
			res.send(data);
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.post('/', (req, res) => {
	const order = new Order(req.body);

	order.save((err, results) => {
		if (!err) {
			res.send(results);

			Book.update(
				{_id: mongoose.Types.ObjectId(req.body.bookId)},
				{$inc: { orderedTimes: 1 }},
				(err, data) => {
					if (!err) {
						console.log(data);
					}
					else {
						console.log(err);
					}
				}
			);
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.put('/', (req, res) => {
	const userId = req.body.userId;
	const ordersToRemove = JSON.parse(req.body.remove);

	if(ordersToRemove) {
		Order.deleteMany(
			{_id: {$in: ordersToRemove}},
			(err, data) => {
				if (!err) {
					res.send(data);
				}
				else {
					res.status(500).send(err);
				}
			}
		);
	}
});

router.delete('/:id', function (req, res) {
	Order.findOneAndDelete(
		{_id: req.params.id },
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