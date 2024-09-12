const express = require("express");
const expressJwt = require("express-jwt");
const dotenv = require("dotenv");
dotenv.config();
exports.requireSignIn = expressJwt({secret:process.env.JWT_KEY,algorithms:["HS256"]});
