const cloudinary = require('cloudinary');
//const dotenv=require('dotenv').config({ path: '/../../../env/vars' });
dotenv=require('dotenv').config({ path: '../../../env/vars' });
//const config = require('../config');
const fs = require('fs');
console.log(dotenv);
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET
});
//console.log(cloudinary.cloud_name);
function upload(file) {
	console.log('UPLOADING ' + file);
	return new Promise((resolve, reject) => {
		file.mv(`tmp/${file.name}`, function(err) {
			if (err) return reject(err);
			cloudinary.uploader.upload(`tmp/${file.name}`).then((uploadResult) => {
				fs.unlinkSync(`tmp/${file.name}`);
				resolve(uploadResult.secure_url);
			});
		});
	});
}

module.exports = upload;
