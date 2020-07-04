const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World');
});

var PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`express listening on port ${PORT}`);
})