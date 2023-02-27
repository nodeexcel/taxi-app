import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define storage destination and filename
const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', 'public', 'uploads'),
  filename: function (req, file, cb) {
    const userId = req.user.id;
    const fileExtension = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${userId}-${file.fieldname}-${uniqueSuffix}${fileExtension}`);
  },
});

// Define file filter function
const fileFilter = function (req, file, cb) {
  const allowedTypes = ['image/jpeg', 'image/png'];
  const maxFileSize = 10 * 1024 * 1024; // 10MB limit

  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'), false);
  }

  if (file.size > maxFileSize) {
    return cb(new Error('File size is too large. Maximum file size is 10MB.'), false);
  }

  cb(null, true);
};

// Create multer instance with storage and fileFilter options
const fileService = multer({ storage, fileFilter });

export default fileService;
