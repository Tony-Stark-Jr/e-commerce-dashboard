const express = require('express');
require('./db/config')
const app = express();

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/e-commmerce');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product', productSchema);
//     const data = await product.find();
//     console.log(data);
// }

// connectDB();

const port = 5000
app.listen(port, () => console.log(`Your app is running at localhost://${port}`))