import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [error, setError] = useState("");

    const addProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        const userId = localStorage.getItem('user')._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        // result = await result.json();
       await result.json();
        // console.log(result);
    }

    return (
        <div className='product'>
            <h1>Add product</h1>

            <input type="text" className="inputBox" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter product name' />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" className="inputBox" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter product price' />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}


            <input type="text" className="inputBox" onChange={(e) => setCategory(e.target.value)} value={category} placeholder='Enter product category' />
            {error && !category && <span className='invalid-input'>Enter valid category</span>}


            <input type="text" className="inputBox" onChange={(e) => setCompany(e.target.value)} value={company} placeholder='Enter product company' />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}


            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;