const pool = require('../config/db')


class moviesModel {
  constructor(moviesData) {
    this.title = moviesData.title;
    this.genres = moviesData.genres;
    this.year = moviesData.year;
    this.photo = moviesData.photo;
  }

  static create(moviesData, callback) {
    const { title, genres, year, photo } = moviesData;
    const query = 'INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4) RETURNING id';
    const values = [title, genres, year, photo];

    pool.query(query, values, (err, result) => {
      if (err) {
        return callback(err, null);
      }

      return callback(null, result.rows[0].id);
    });
  }
}

module.exports = moviesModel;


