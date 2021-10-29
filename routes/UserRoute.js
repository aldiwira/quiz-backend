const { Router } = require("express");
const Route = Router();
const { Users } = require("../controller");

Route.post("/login", Users.loginAction);
Route.post("/register", Users.registerAction);

module.exports = Route;
