import "./cart.css"

import { useContext } from "react"
import { CartContext } from "../componets/context/CartContext"
import CartProducts from "../componets/CartProducts"


function CartPage() {

    const cart = useContext(CartContext)

    console.log(cart)

    return (
        <>
            <main className="nav-padding section">
                <article className="container">
                    <h1>Kundvagn</h1>

                    <div className="cart-container">

                        <ul className="cart-container-ul">
                            {cart.cart ? (
                                <>
                                    {cart.cart.map((products, index) =>
                                        <CartProducts
                                            key={index}
                                            PRODUCT_ID={products.id}
                                            LINK={"/ShellPage"}
                                            IMG={products.picture}
                                            IMG_ALT={"picture of a shell"}
                                            NAME={products.name}
                                            PHONETYPE={products.phonemodel[0].phoneModel}
                                            PRICE={products.price}
                                        />
                                    )}
                                </>
                            ) : (
                                <p>Products is currently loading</p>
                            )}
                        </ul>

                    </div>
                </article>
            </main>
        </>
    )
}

export default CartPage
