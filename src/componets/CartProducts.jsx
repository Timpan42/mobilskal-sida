
import { Link } from "react-router-dom"
import { ProductIdContext } from "./context/ProductContext"
import { useState, useContext } from 'react'


function CartProducts(props) {
    let { PRODUCT_ID, LINK, IMG, IMG_ALT, NAME, MATERIAL, PHONETYPE, PRICE } = props

    const [productId, setProductId] = useContext(ProductIdContext)

    function storeData() {
        setProductId(PRODUCT_ID)
    }

    return (

        <li className="cart-container-li">
            <div className="cart-flex">
                <Link to={LINK} onClick={storeData}>
                    <img src={IMG} alt={IMG_ALT} />
                </Link>

                <p>
                    {NAME}
                </p>
                <p>
                    {PHONETYPE}
                </p>
                <p>
                    {PRICE} SEK
                </p>
                <div className="number">
                    <span className="minus">-</span>
                    <input type="text" value={1} />
                    <span className="plus">+</span>
                </div>
                <div className="trash" >
                    <img src="trash.svg" alt="" />
                </div>
            </div>
        </li>

    )
}

export default CartProducts