import React from 'react';
import mobile from '../../src/images/mobile.png';
import cart from '../../src/images/cart.png'

function Home(props) {
    console.log(props )
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="add-to-cart">
                <img src={cart} />

            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={mobile} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={() =>
                    props.addToCartHandler({price:1000, name: 'Iphone'} ) }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home