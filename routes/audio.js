import { Router } from 'express';
import File from '../models/files';
import path from 'path';
import fs from 'fs';

const router = Router();

router.get('/:id', (req, res) => {
	File.find({_id: req.params.id}, (err, data) => {
		if (!err) {
			const name = data[0].name;
			const url = path.join(__dirname, `../data/audio/${name}`);

			var inputStream = fs.createReadStream(url);
			inputStream.pipe(res);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

export default router;