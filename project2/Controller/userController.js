const User = require("./../models/userModel");

exports.GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.send({ message: "something went wrong!" });
  }
};

exports.UserByCountry = async (req, res) => {
  try {
    // const limit = req.query.limit;
    // console.log(limit);
    const country = req.params.country;
    const limit = parseInt(req.query.limit);
    console.log(limit);

    const users = await User.aggregate([
      //stage 1
      {
        $match: {
          country: country,
        },
      },
      //stage 2
      {
        $sort: {
          age: -1,
        },
      },
      //stage 3
      {
        $limit: limit,
      },
      //stage 4
      {
        $project: {
          __v: 0,
          _id: 0,
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.send({ message: "something went wrong!" });
  }
};
