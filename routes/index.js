const UserRoute = require("./UserRoute");

module.exports = (App) => {
  const routes = [
    {
      route: "/user",
      controller: UserRoute,
    },
  ];
  routes.map((_R, i) => {
    App.use(_R.route, _R.controller);
  });
};
