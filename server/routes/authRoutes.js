const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserName, getAllUser } = require("../controllers/authController");

router.post("/register", registerUser);

router.post("/login",loginUser);

router.get("/user", getUserName);

router.get("/getall", getAllUser);

module.exports = router;
