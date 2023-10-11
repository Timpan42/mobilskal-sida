import "./cart.css"

import plastic from "../assets/plastic.jpg"


function CartPage() {
    return (
        <>
            <main className="nav-padding section">
                <article className="container">
                    <h1>Kundvagn</h1>

                    <div className="cart-container">
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
                        <div className="cart-container-elements">
                            <div className="cart-flex">
                                <h3>Produkt namn</h3>
                                <img src={plastic} alt="" />
                            </div>
                            <div>
                                <select className="cart-container-elements-select" name="phoneTyp" id="phoneTyp">
                                    <optgroup label="iPhones">
                                        <option value="iphone_15">iPhone 15</option>
                                        <option value="iphone_15_pro">iPhone 15 Pro</option>
                                    </optgroup>
                                    <optgroup label="Samsung">
                                        <option value="galaxy_s23">Galaxy s23</option>
                                        <option value="galaxy_s23_ultra">Galaxy s23 Ultra</option>
                                    </optgroup>
                                    <optgroup label="Google">
                                        <option value="pixel_8">Pixel 8</option>
                                        <option value="pixel_8_pro">Pixel 8 Pro</option>
                                    </optgroup>

                                </select>

                                <div className="cart-product-priss">
                                    <p>
                                        Priss:
                                    </p>
                                    <p>
                                        399 SEK
                                    </p>
                                </div>

                                <div className="cart-product-priss">
                                    <p>
                                        Frakt:
                                    </p>
                                    <p>
                                        30 SEK
                                    </p>
                                </div>

                                <div className="cart-product-priss">
                                    <p>
                                        Priss:
                                    </p>
                                    <p>
                                        429 SEK
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    )
}

export default CartPage
