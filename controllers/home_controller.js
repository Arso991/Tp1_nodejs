const index = (req, res) => {
    res.end("Bienvenue sur votre dictionnaire, veuillez spécifier la langue du mot à traduire puis le mot !")
};
let words = require("../dico").words

const traduction = (req, res) =>{
    let reqData = ""
    req.on("data", function(chunk){
        reqData+=chunk.toString();
    });
    
    req.on("end", function(){
        if(words[reqData]){
            res.writeHead(200, {"Content-Type":"application/json", Accept : "application/Text"});
            res.end(words[reqData])
        }else{
            res.writeHead(404)
            res.end("404 Word Not Found") 
        }
    });
}

module.exports = {index, traduction}