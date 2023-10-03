const index = (req, res) => {
    res.end("Bienvenue sur votre dictionnaire, veuillez spécifier la langue du mot à traduire puis le mot !")
};

const traduction = (req, res) =>{
    let reqData = ""
    req.on("data", function(chunk){
        reqData+=chunk.toString();
    })
}

module.exports = {index}