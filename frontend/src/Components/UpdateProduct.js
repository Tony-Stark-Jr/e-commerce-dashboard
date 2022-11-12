import React, { useState } from 'react';

const UpdateProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")


    const updateProduct = async () => {
        console.log(name, price, category, company)
    }

    return (
        <div className='product'>
            <h1>Update product</h1>

            <input type="text" className="inputBox" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter product name' />


            <input type="text" className="inputBox" onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter product price' />



            <input type="text" className="inputBox" onChange={(e) => setCategory(e.target.value)} value={category} placeholder='Enter product category' />


            <input type="text" className="inputBox" onChange={(e) => setCompany(e.target.value)} value={company} placeholder='Enter product company' />


            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;