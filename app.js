const express = require("express");
const path = require('path');
const app = express();
const port = 3000;
const mainROuter = require('./routes/index');


// Middle ware
app.set('view engine', 'ejs');
app.use(express.static('public'));

// app.use(express.urlencoded());
app.use("/", mainROuter)
app.set('views', path.join(__dirname, '/public'))


//listen to the port 3000
app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});