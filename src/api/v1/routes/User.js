// -----------------------Third-party libraries and modules-----------------------
const express = require("express");

// -----------------------Custom libraries and modules-----------------------
const { 
    CreateNewUser,
    LoginUser
} = require("../controller");

// -----------Initialize the router-----------
const router = express.Router();

// -----------Routes-----------
// Create a new user
router.post("/create-new-user", CreateNewUser);

// Login User
router.post("/login" , LoginUser);

module.exports = router;