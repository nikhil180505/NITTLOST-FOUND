// 
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinaryConfig'); // Adjust path as necessary
const path = require('path')
// Configure Cloudinary Storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads', // Optional: Define a folder in Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg', 'gif','webp'],
        filename: (req, file) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            return `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`;
        },
    },
});
const upload = multer({ storage: storage });

module.exports = upload;