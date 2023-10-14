const express = require('express');
const app = express();
const PORT = 5000;



app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/homepage.html');
});

app.get('/cat',(req,res)=>{
    res.sendFile(__dirname + '/views/cat.html');
});


/*listen to a port and start the server*/
app.listen(PORT,()=>{
    console.log("Connected" ,PORT);

 
});