const home_controller = require("../controllers/home_controller");
const about_controller = require("../controllers/about_controller")

const routes = {
  "/": {
    method: "GET",
    handler: home_controller.index
  },
  "/about": {
    method: "GET",
    handler: about_controller.about
  },
};

Route.get("/", home_controller.index);

const router = (req, res) => {
  const { url, method } = req;

  const route = routes[url];

  if (!route) {
    res.writeHead(404);
    res.end("404 Not Found");
    return;
  }

  if(method != route.method){
    res.writeHead(405);
    res.end("405 Method Not Allowed");
    return;
  }

  route.handler(req, res);
};

module.exports = router;
