const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const actionsRoute = require('./actions');
app.use('/api', actionsRoute);

const port = 5088;

database
.sync()
.then(results => {
    console.log(results);
    app.listen(port, function(){
        console.log(`Server is using port ${port}`);
    })
})
.catch(err => {
    console.log(err);
})



