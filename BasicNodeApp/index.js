const http = require('http');

const server = http.createServer((req, res) => {

    console.log("this is my log");
    res.write("Welcome to NODE app");
    res.end();
});

//server.listen(process.env.PORT);
server.listen(3000);
