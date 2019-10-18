import { Router } from 'express';
import File from '../models/files';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
	File.find({}, (err, data) => {
		if (!err) {
			res.send(data);
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.get('/:bookId', (req, res) => {
	File.find({bookId: req.params.bookId}, (err, data) => {
		if (!err) {
			res.send(data);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

router.get('/download/:id', (req, res) => {
	File.find({_id: req.params.id}, (err, data) => {
		const file = data[0];

		if(!err) {
			res.download(path.join(file.url, file.name));
		}
		else {
			res.status(500).send(err);
		}
	});
});

router.post('/upload/:datatype', (req, res) => {
	const datatype = req.url.split('/')[2];

	if (req.files && Object.keys(req.files).length == 0) {
		return res.status(400).send('No files were uploaded.');
	}

	const uploadedFile = req.files.upload;
	const fileName = uploadedFile.name;
	const url = path.join(__dirname, `../data/${datatype}`, fileName);

	uploadedFile.mv(url, function (err) {
		if (!err) {
			const fileSize = uploadedFile.size;
			const fileBookId = req.body.book_id;
			const fileObj = {
				name: fileName,
				size: fileSize,
				url,
				bookId: fileBookId,
				dataType: datatype
			};
			const file = new File(fileObj);

			file.save((err, data) => {
				if (!err) {
					res.send(data);
				}
				else {
					res.status(500).send(err);
				}
			});
		}
		else {
			res.status(500).send(err);
		}
	});
});

export default router;