const express = require('express');
const pool = require('../config/db');
const multer = require('multer');
const moviesRepository = require('../controller/moviesController');

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    const filename = Date.now() + '-' + file.originalname;
    callback(null, filename);
  },
});

const upload = multer({ storage });

router.post('/', upload.single('photo'), moviesRepository.createMovie);


module.exports = router;

