const { Router } = require("express");
const Route = Router();
const { Users } = require("../controller");

Route.post("/login", Users.loginAction);

module.exports = Route;
