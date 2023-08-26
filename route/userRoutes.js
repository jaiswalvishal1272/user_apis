const express = require('express');
const { createUser, getUser } = require("../controller/userController");

const router = express.Router();

router.route("/signup").post(createUser);
router.route("/login").post(getUser);

module.exports = router;