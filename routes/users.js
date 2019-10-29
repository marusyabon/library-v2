import { Router } from 'express';
import connection from '../db';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import ms from '../mailchimp/mc';

const router = Router();

/* GET users listing. */
router.get('/', function (req, res) {
	connection.query('SELECT users.id, users.user_name, users.user_surname, users.phone_numbers, users.email, roles.role_name FROM `users` LEFT JOIN `roles` ON users.`role_id` = roles.`id`',
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});

router.get('/readers', function (req, res) {
	const query = mysql.format('SELECT id, user_name, user_surname FROM `users` WHERE `role_id` = 1');

	connection.query(query,
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});

router.get('/:id', function (req, res) {
	const id = req.params.id;
	const query = mysql.format('SELECT id, user_name, user_surname, passport_ID, birth_date, address, phone_numbers, card_reader_number, email, role_id, accept_newsletters \
	FROM `users` WHERE `id` = ?', [id]);

	connection.query(query,
		function (err, results) {
			if (!err) {
				res.send(results[0]);
			}
			else {
				res.status(500).send(err);
			}
		}
	);
});

router.post('/', (req, res) => {
	const user = req.body;
	const hashCost = 10;
	bcrypt.hash(user.account_password, hashCost).then((hashedPassword) => {
		const query = mysql.format('INSERT INTO `users` (`user_name`, `user_surname`, `role_id`, `passport_ID`, `birth_date`, `address`, `phone_numbers`, `email`, `account_password`) VALUES (?,?,?,?,?,?,?,?,?)', [
			user.user_name,
			user.user_surname,
			user.role_id,
			user.passport_ID,
			user.birth_date || null,
			user.address,
			user.phone_numbers,
			user.email,
			hashedPassword
		]);

		connection.query(query,
			function (err, results) {
				if (!err) {
					res.send(results);
				}
				else {
					res.status(500).send(err);
				}
			}
		);
	});	
});

router.put('/', function (req, res) {
	const user = req.body;
	const query = mysql.format('UPDATE `users` SET `user_name` = ?, `user_surname` = ?, `passport_ID` = ?, `birth_date` = ?, `address` = ?, `phone_numbers` = ?, `email` = ?, `role_id` = ?, `accept_newsletters` = ? WHERE `id` = ?', [
		user.user_name,
		user.user_surname,
		user.passport_ID,
		user.birth_date || null,
		user.address,
		user.phone_numbers,
		user.email,
		user.role_id,
		user.accept_newsletters,
		user.id
	]);

	connection.query(query,
		function (err, results) {
			if (!err) {
				res.send(results);
			}
			else {
				res.status(500).send(err);
			}
		}
	);

	ms.checkSubscriber(user.email, user.accept_newsletters);
});

export default router;