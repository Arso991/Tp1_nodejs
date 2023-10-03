const words = {
  manger : "eat",
  eat : "manger",
  coder : "code",
  code : "coder",
  boire : "drink",
  drink : "boire"
}
  

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