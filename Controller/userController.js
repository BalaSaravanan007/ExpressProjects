const User_Info = require("./../Model/userModel");

exports.GetAllUsers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 22;
    const page = parseInt(req.query.page) - 1 || 0;
    const sortBy = req.query.sort || "-age";
    // if (sortBy) {
    //   sortBy = req.query.sort.split(",").join(" ");
    // } else {
    //   sortBy = "-age";
    // }
    const users = await User_Info.find({}, { __v: 0, _id: 0 })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      status: "success",
      results: users.length,
      page: page + 1,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed!",
      message: "something went wrong",
      err,
    });
  }
};

exports.GetUserByCountry = async (req, res) => {
  try {
    const countries = req.params.country;
    const limit = parseInt(req.query.limit);
    const userCountry = await User_Info.aggregate([
      // stage 1
      {
        $lookup: {
          from: "countrties",
          localField: "name",
          foreignField: "name",
          as: "Details",
        },
      },

      // stage 2
      {
        $addFields: {
          HomeCountry: {
            $arrayElemAt: ["$Details", 0],
          },
        },
      },

      // stage 3
      {
        $project: {
          Details: 0,
        },
      },

      // stage 4
      {
        $match: {
          "HomeCountry.country": countries,
        },
      },

      // stage 5
      {
        $project: {
          _id: 0,
          __v: 0,
        },
      },

      // state 6
      {
        $project: {
          HomeCountry: {
            name: 0,
            _id: 0,
            __v: 0,
          },
        },
      },

      // stage 7
      {
        $sort: {
          age: -1,
        },
      },

      // stage 8
      {
        $limit: limit,
      },
    ]);

    res.status(200).json({
      status: "success",
      results: userCountry.length,
      data: {
        userCountry,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed!",
      message: "something went wrong",
      err,
    });
  }
};
