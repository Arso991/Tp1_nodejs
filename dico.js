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

  const traduction = (reqData, res) =>{
    words.find((word) => {
        if (word.name == reqData) {
          res.end(word.traduct);
        } else if(word.traduct == reqData) {
          res.end(word.name);
        }
      });
  }

  module.exports = {words, traduction};