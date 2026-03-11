const pool = require("../config/db")

exports.findAll = async (page, limit) => {

  const offset = (page - 1) * limit

  const result = await pool.query(
    `SELECT * FROM movies
     ORDER BY id
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  )

  return result.rows
}

exports.countMovies = async () => {

    const result = await pool.query(
        `SELECT COUNT(*) FROM movies`
    )

    return Number(result.rows[0].count)
}


exports.createMovie = async (title, year, rating) => {
    const result = await pool.query(
        "INSERT INTO movies (title, year, rating) VALUES ($1,$2,$3) RETURNING *",
        [title, year, rating]
    )

    return result.rows[0]
}

exports.updateMovie = async (id, title, year, rating) => {
    await pool.query(
        "UPDATE movies SET title=$1, year=$2, rating=$3 WHERE id=$4",
        [title, year, rating, id]
    )
}

exports.deleteMovie = async (id) => {
    await pool.query(
        "DELETE FROM movies WHERE id=$1",
        [id]
    )
}

exports.findByTitle = async (title, id) => {

  const result = await pool.query(
    `SELECT * FROM movies
     WHERE LOWER(title) = LOWER($1)
     AND id != $2`,
    [title, id]
  )

  return result.rows[0]
}