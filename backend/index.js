const express = require('express');
const cors = require('cors')
require('./db/config')
const User = require('./db/Users')
const app = express();


app.use(express.json())
app.use(cors());

app.post("/register", async (req, res) => {
    let user = new User(req.body)
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            res.send(user)
        } else {
            res.send({ result: "No user found" })
        }
    }
    else {
        res.send({ result: "No user found" })
    }
})

const port = 5000
app.listen(port, () => console.log(`Your app is running at http://localhost:${port}/`))