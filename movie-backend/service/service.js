const movieRepository = require("../repository/repository")

exports.getMovies = async (page, limit) => {

  const movies = await movieRepository.findAll(page, limit)

  const total = await movieRepository.countMovies()

  return {
    data: movies,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  }
}

exports.createMovie = async (title, year, rating) => {

    if(!title || !title.trim()){
        throw new Error("Title is required")
    }

    const duplicate = await movieRepository.findByTitle(title)

    if(duplicate){
        throw new Error("Movie title already exists")
    }

    return await movieRepository.createMovie(title, year, rating)
}

exports.updateMovie = async (id, title, year, rating) => {

    if (!title || !title.trim()) {
        throw new Error("Title is required")
    }

    const duplicate = await movieRepository.findByTitle(title, id)

    if (duplicate) {
        throw new Error("Movie title already exists")
    }

    console.log("update id:", id)
console.log("title:", title)
console.log("duplicate:", duplicate)

    await movieRepository.updateMovie(id, title, year, rating)
}

exports.deleteMovie = async (id) => {
    await movieRepository.deleteMovie(id)
}