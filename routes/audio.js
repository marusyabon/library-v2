import { Router } from 'express';
import File from '../models/files';
import path from 'path';
import fs from 'fs';
import mp3Duration from 'mp3-duration';

const router = Router();

router.get('/:id', (req, res) => {
	File.find({_id: req.params.id}, (err, data) => {
		if (!err) {
			const name = data[0].name;
			const url = path.join(__dirname, `../data/audio/${name}`);

			const audioStream = fs.createReadStream(url, {
				// start: 0,
				// end: 64*1024*1
			});
			const stat = fs.statSync(url);
			
			res.setHeader('Content-Type', 'audio/mpeg');
			res.setHeader('Content-Length', stat.size);
			res.setHeader('accept-ranges', 'bytes');

			let dataLegth = 0; // length of sent data
			const maxSize = 3*60; // maximum 3 minutes

			audioStream.on('data', function(chunk) {
				mp3Duration(chunk, function (err, duration) {
					if (err) {
						console.log(err.message);
						return;
					}
					dataLegth += duration;
					log(dataLegth + ' seconds long');
				});

				if(dataLegth > maxSize) {
					audioStream.unpipe(res);
				}				
			});

			audioStream.pipe(res);
		}
		else {
			res.send({status: 'error'});
		}
	});
});

export default router;