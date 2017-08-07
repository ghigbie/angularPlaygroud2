const express = require('express'),
         path = require('path'),
          app = express();
          
let port = process.env.PORT;
let ip = process.env.IP;

app.get( '/', (req, res) =>{
   res.sendFile(path.join(__dirname, '/views', '/landing.html')); 
});

app.listen(port, ip, ()=>{
    console.log(`Server is listening on port ${port}`);
});
          
          