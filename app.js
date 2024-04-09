const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/', function(req, res) {
    res.sendFile('index.html', (err) => {
        if (err) {
            console.log(err);
            res.end(err.message);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});