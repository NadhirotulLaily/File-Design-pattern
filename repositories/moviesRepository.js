const moviesModel = require('../model/moviesModel');

class moviesRepository {
  static createMovie(moviesData, callback) {
    const movie = new moviesModel(moviesData);
    moviesModel.create(movie, callback);
  }
}

module.exports = moviesRepository;
