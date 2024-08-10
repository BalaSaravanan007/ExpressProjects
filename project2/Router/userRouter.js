const express = require("express");
const userController = require("./../Controller/userController");

const router = express.Router();

router.route("/").get(userController.GetAllUsers);
router.route("/:country").get(userController.UserByCountry);

module.exports = router;
