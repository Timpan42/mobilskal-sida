import "./shell.css"

import plastic from "../assets/plastic.jpg"


function ShellPage() {
    return (
        <>
            <main className="nav-padding">
                <article className="shell-flex wrapper container section">
                    <div className="shell-img-flex">
                        <div className="shell-small-img">
                            <img src={plastic} alt="" />
                            <img src={plastic} alt="" />
                            <img src={plastic} alt="" />
                        </div>

                        <div className="shell-main-img">
                            <img src={plastic} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="shell-product-priss">
                            <div className="shell-flex">
                                <h3>Produkt namn</h3>
                                <p>399 SEK</p>
                            </div>
                            <div className="shell-product-priss-button">
                                <select name="phoneTyp" id="phoneTyp">
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
                                <div className="shell-buy-button section">
                                    <a href="./cart.html"><button>KÖP</button></a>
                                </div>
                                <p>
                                    I lager: 5
                                </p>
                                <p>
                                    Leverans tid: 1-4 veckor
                                </p>
                            </div>
                        </div>
                    </div>

                </article>

                <article className="section container wrapper">
                    <div className="shell-info">
                        <h3>
                            Viktig infomration som ska finnas
                        </h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </article>

                <article className="wrapper container section">

                    <h2 className="center">
                        Liknade produkter
                    </h2>

                    <ul className="features grid" role="list">
                        <li className="main-list-cards flow">
                            <div className="products-list-img-background">
                                <a href="./shell.html">
                                    <img src={plastic} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                    <div className="products-list-elements">
                                        <h3>
                                            Backsippor
                                        </h3>
                                        <p>
                                            läder
                                        </p>
                                        <p>
                                            iPhone 15
                                        </p>
                                        <p>
                                            399 SEK
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="products-list-img-background">
                                <a href="./shell.html">
                                    <img src={plastic} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                    <div className="products-list-elements">
                                        <h3>
                                            Blåstjärnor
                                        </h3>
                                        <p>
                                            läder
                                        </p>
                                        <p>
                                            iPhone 15
                                        </p>
                                        <p>
                                            399 SEK
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="products-list-img-background">
                                <a href="./shell.html">
                                    <img src={plastic} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                    <div className="products-list-elements">
                                        <h3>
                                            Fläder
                                        </h3>
                                        <p>
                                            läder
                                        </p>
                                        <p>
                                            iPhone 15
                                        </p>
                                        <p>
                                            399 SEK
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </article>

            </main>
        </>
    )
}

export default ShellPage


