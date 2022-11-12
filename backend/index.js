const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/Users');
const Product = require('./db/Product');
const { response } = require('express');
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

app.post('/add-product', async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/products', async (req, res) => {
    let products = await Product.find();
    if (products.length > 0) {
        res.send(products)
    } else {
        res.send({ result: "No products found" })
    }
})

app.delete("/product/:id", async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.send(result)
});

app.get("/product/:id", async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });
    if(result){
        res.send(result)
    }else{
        res.send({result:"No record found"})
    }
});



const port = 5000
app.listen(port, () => console.log(`Your app is running at http://localhost:${port}/`))