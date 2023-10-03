const home_controller = require('../controllers/home_controller')
const Route = {
     routes : {},

     get(path, controller_function){
        this.routes[path]={
            method : "GET",
            controller_function,
        };
    },
    
     post(path, controller_function){
        this.routes[path]={
            method : "POST",
            controller_function,
        };
    }
}

Route.get('/', home_controller.index);

const router = (req, res) => {
  const { url, method } = req;

  const route = Route.routes[req.url];

  if (!route) {
    res.writeHead(404);
    res.end("404 Not Found");
    //res.end(req.url);
    return;
  }

  if(method != route.method){
    res.writeHead(405);
    res.end("405 Method Not Allowed");
    return;
  }

  route.controller_function(req, res);
  //controller_function(req, res);
};

module.exports = {Route, router};