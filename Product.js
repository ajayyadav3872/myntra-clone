// import React, { Component} from 'react'
import "./Product.css";
import React, { useState } from 'react';


function Product({ product }) {
    const [state, setState] = useState(false);
    let url = "http://localhost:3000/";
    return (
        <div className='ProductList'>
            <div className="productItems">
                <div className='items'>
                    <a href={url}>
                        <h1 className="itemText1">Budget Buys</h1>
                        <i className="itemText2">Enter A World Of Big Saving</i>
                    </a>
                </div>
            </div>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '11%' }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="100%" className="Item-url" />
                                <p>{productItem.name}</p>
                                <p> &#8377; {productItem.price} /-</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Product;
