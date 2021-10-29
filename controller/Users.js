const { Users } = require("../models");
const { response, bcrypt } = require("../helper");
module.exports = {
  loginAction: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      Users.findOne({ username }).then(async (result) => {
        if (result === null) {
          res
            .status(400)
            .json(response.set(400, "Your account is not registered"));
        } else {
          if (await bcrypt.compare(password, result.password)) {
            res
              .status(200)
              .json(
                response.set(true, "Success login with your account", users)
              );
          } else {
            res.status(400).json(response.set(400, "Wrong password"));
          }
        }
      });
    } catch (error) {
      next(error);
    }
  },
  registerAction: async (req, res, next) => {
    const { username, password, name, kelas, role } = req.body;
    const parseRole = role === "admin" ? 1 : 0;
    try {
      Users.findOne({ username }).then((users) => {
        if (users) {
          res
            .status(400)
            .json(response.set(false, `Username ${username} sudah terdaftar`));
        } else {
          Users.create({
            username,
            password: bcrypts.hash(password),
            name,
            kelas,
            role: parseRole,
          })
            .then(async (datas) => {
              if (datas) {
                res
                  .status(200)
                  .json(
                    response.set(true, "Berhasil membuat account baru", datas)
                  );
              }
            })
            .catch((err) => {
              throw new Error(err);
            });
        }
      });
    } catch (error) {
      next(error);
    }
  },
};
