const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.listen(3000, err => {
    if(err){
        throw err;
    }

    console.log('Application running on port 3000');
});

