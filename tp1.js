const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
    Accept: "application/text",
  });
  const words = [
    {
      id: 1,
      name: "manger",
      traduct: "eat",
    },
    {
      id: 2,
      name: "coder",
      traduct: "code",
    },
    {
      id: 3,
      name: "boire",
      traduct: "drink",
    },
    {
      id: 4,
      name: "voler",
      traduct: "fly",
    },
    {
      id: 5,
      name: "dormir",
      traduct: "sleep",
    },
    {
        id: 6,
        name: "sauter",
        traduct: "jump",
      },
  ];

  let reqData = "";

  req.on("data", function (chunk) {
    console.log("GOT DATA !");
    reqData += chunk.toString();
    console.log(chunk.toString());
  });

  req.on("end", function () {
    words.filter((word) => {
      if (word.name == reqData) {
        res.end(word.traduct);
      }
      if(word.traduct == reqData) {
        res.end(word.name)
      }
    });
  });
});

server.listen(8000, function () {
  console.log("Server running at 8000");
});
