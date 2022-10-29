const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("app helll owrldis running")
})

const port = 8080
app.listen(port, () => console.log(`Your app is running at localhost://${port}`))