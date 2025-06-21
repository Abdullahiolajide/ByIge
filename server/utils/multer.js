const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'blog_images', // optional folder name
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

const parser = multer({ storage });

module.exports = parser;
