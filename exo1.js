let http = require('http');

let server = http.createServer(function(req, res){
    res.writeHead(201, {'Content-Type':'application/json', Accept:'application/json'});
    const citation = [
        {
            number : 1,
            content: "Bonjour, la vie est belle"
        },
        {
            number : 2,
            content: "Bonsoir, demain est un autre jour"
        },
        {
            number : 3,
            content: "Aujourd'hui il faut sourire"
        },
        {
            number : 4,
            content: "Le bonheur se trouve à coté"
        }
    ]

    /* var reqData = "";
    req.on('data', function(chunk){
        console.log("GOT DATA !");
        reqData += chunk.toString();

        console.log(chunk.toString());
    })

    req.on("end", function(){
        res.end(reqData);
    }) */

    //res.end(human);
    //res.end(JSON.stringify(citation))

    let random = Math.floor(Math.random()*citation.length)

    res.end(JSON.stringify(citation[random]));

})

server.listen(8001, function(){
    console.log('Server is running at 8001');
});
