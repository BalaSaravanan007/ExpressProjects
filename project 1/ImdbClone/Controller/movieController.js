const Movie = require("./../models/movieSchema");

exports.GetAllMovies = async (req, res) => {
  try {
    // console.log(req.query);
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 2;
    const search = req.query.search || "";
    let sort = req.query.sort || "-rating";
    let genre = req.query.genre || "All";

    const genreOptions = ["Action", "Adventure", "Sci-fi", "Crime", "Drama"];

    if (genre === "All") {
      genre = [...genreOptions];
    } else {
      genre = genre.split(",");
    }

    if (sort) {
      sortBy = sort.split(",").join(" ");
    } else {
      sortBy = "-rating";
    }
    // console.log(sortBy);

    const movies = await Movie.find({ name: { $regex: search, $options: "i" } })
      .where("genre")
      .in([...genre])
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      status: "success",
      results: movies.length,
      data: {
        page: page + 1,
        limit,
        movies,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed!",
      message: { err },
    });
  }
};

// const insert_data = async () => {
//   try {
//     const data = await Movie.insertMany(movie);
//     return Promise.resolve(data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// module.exports = insert_data;
