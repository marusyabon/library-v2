import { Router } from 'express';
const router = Router();
import connection from '../db';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';

/* GET users listing. */
router.get('/', function (req, res) {
	connection.query('SELECT users.*, roles.role_name FROM `users` LEFT JOIN `roles` ON `role_id` = `id`',
		function (err, results) {
			if (!err) {
				res.send(results);
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
		}
	);
});

router.get('/:id', function (req, res) {
	const id = req.params.id;
	const query = mysql.format('SELECT * FROM `users` WHERE `id` = ?', [id]);

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
	const query = mysql.format('UPDATE `users` SET `user_name` = ?, `user_surname` = ?, `passport_ID` = ?, `birth_date` = ?, `address` = ?, `phone_numbers` = ?, `email` = ?, `role_id` = ? WHERE `id` = ?', [
		user.user_name,
		user.user_surname,
		user.passport_ID,
		user.birth_date || null,
		user.address,
		user.phone_numbers,
		user.email,
		user.role_id,
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
});

export default router;