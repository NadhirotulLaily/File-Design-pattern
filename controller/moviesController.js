const moviesRepository = require('../repositories/moviesRepository');

class moviesController {
  static createMovie(req, res) {
    const moviesData = {
      title: req.body.title,
      genres: req.body.genres,
      year: req.body.year,
      photo: req.file.filename,
    };

    moviesRepository.createMovie(moviesData, (err, movieId) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      return res.status(201).json({ message: 'Movies created successfully', id: movieId });
    });
  }
}

module.exports = moviesController;

