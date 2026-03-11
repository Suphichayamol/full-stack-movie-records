const express = require("express")
const router = express.Router()

const movieController = require("../controllers/controller")
const { checkManager } = require("../middleware/middleware")

router.get("/", movieController.getMovies)

router.post("/", movieController.createMovie)

router.put("/:id", movieController.updateMovie)

router.delete("/:id",checkManager, movieController.deleteMovie)

module.exports = router