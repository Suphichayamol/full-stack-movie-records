const movieService = require("../service/service")

exports.getMovies = async (req, res) => {

  try {

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    

    const result = await movieService.getMovies(page, limit)

    res.json(result)

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Server error"
    })
  }
}

exports.createMovie = async (req, res) => {

    try {

        const { title, year, rating } = req.body

        const movie = await movieService.createMovie(
            title,
            year,
            rating
        )

        res.json(movie)

    } catch(err){
        res.status(400).json({ message: err.message })
    }
}

exports.updateMovie = async (req, res) => {

    try{

        const id = req.params.id
        const { title, year, rating } = req.body

        await movieService.updateMovie(
            id,
            title,
            year,
            rating
        )

        res.json({ message:"Movie updated" })

    }catch(err){
        res.status(400).json({ message: err.message })
    }
}

exports.deleteMovie = async (req, res) => {

    const role = req.headers.role

    if(role !== "MANAGER"){
        return res.status(403).json({
            message:"Only MANAGER can delete movies"
        })
    }

    const id = req.params.id

    await movieService.deleteMovie(id)

    res.json({ message:"Movie deleted" })
}