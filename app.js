const express = require('express'),
          app = express();
          
const port = process.env.PORT;
const ip = process.env.IP;

app.get( '/', (req, res) =>{
   res.send("yo"); 
});

app.listen(port, ip, ()=>{
    console.log(`Server is listening on port ${port}`);
});
          
          