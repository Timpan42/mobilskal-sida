import "./cart.css"

import plastic from "../assets/plastic.jpg"
import { useContext } from "react"
import { CartContext } from "../componets/context/CartContext"


function CartPage() {

    const cart = useContext(CartContext)

    console.log(cart)

    return (
        <>
            <main className="nav-padding section">
                <article className="container">
                    <h1>Kundvagn</h1>

                    <div className="cart-container">

                        <div className="cart-container-elements">
                            <div className="cart-flex">
                                <img src={plastic} alt="" />
                                <div>
                                    <p>Produkt namn</p>
                                    <p>Model: iPhone 10</p>
                                </div>
                                <div className="number">
                                    <span className="minus">-</span>
                                    <input type="text" value={1} />
                                    <span className="plus">+</span>
                                </div>

                            </div>
                        </div>



                        <div className="cart-container-elements ">

                            <h2>Kund Uppgifter</h2>
                            <form action="" className="cart-form">
                                <div className="cart-form-name">
                                    <div>
                                        <p>Förnamn</p>
                                        <input type="text" />
                                    </div>
                                    <div>
                                        <p>Efternamn</p>
                                        <input type="text" />
                                    </div>
                                </div>

                                <p>Mail</p>
                                <input type="text" />

                                <p>Telefon Nummer</p>
                                <input type="text" />

                                <p>Addres</p>
                                <input type="text" />
                            </form>
                            <div className="cart-container-elements-button">
                                <button>Betala</button>
                            </div>

                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default CartPage
