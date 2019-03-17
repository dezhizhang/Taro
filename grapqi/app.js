const express = require('express');

let app = express();

app.get('/',(req,res) => {
    res.send('你好')
});

app.listen(8082,() => {
    console.log('run localhost 8082');
    
})