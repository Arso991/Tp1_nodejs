const useRouter = require('./routes2').router
const handler = (req, res) => {
  useRouter(req, res)

 /*  res.writeHead(200, {
    "Content-Type": "application/json",
    Accept: "application/text",
  }); */
  //res.end("Hello world");

  /* const words = require("../dico").words;
  const traduction = require("../dico").traduction; */

  /* let reqData = "";
  req.on("data", function (chunk) {
    console.log("GOT DATA !");
    reqData += chunk.toString();
    console.log(chunk.toString());
  }); */

  /* req.on("end", function () {
    traduction(reqData, res);
  }); */
};

module.exports = handler;
