import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Products = () => {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products", {
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProducts(result)
    }

    // console.log("products",products);

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }


    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts();
        }
    }

    return (
        <div>
            <h2>Products List</h2>

            <input className="search-product-box" type="text" placeholder="Search Product" onChange={searchHandle} />
            <ul className="product-list">
                <li>SN</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>

            {
                products.length > 0 ? products.map((item, index) =>
                    <ul className="product-list" key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.company}</li>
                        <li>{item.category}</li>
                        <li><button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={'/update/' + item._id}>Update</Link></li>


                    </ul>
                )
                    : <h1>No Result Found</h1>
            }
        </div>
    )
}

export default Products