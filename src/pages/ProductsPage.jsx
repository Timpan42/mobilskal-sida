import "./products.css"

import plastic from "../assets/plastic.jpg"
import unique from "../assets/unique.jpg"


function ProductsPage() {
    return (
        <>
            <main className="nav-padding">
                <article className="container section">
                    <h1>
                        Produkter
                    </h1>
                    <h2 className="center">
                        Varför dem här läder skalen är dem bästa
                    </h2>

                    <div className="button-container section">
                        <button>Plast skal</button>
                        <button>Silicon skal</button>
                        <button>Unik skal</button>
                        <button>Skal med print</button>
                        <button>Mönstrade skal</button>
                    </div>
                </article>

                <article className="container section">
                    <div className="button-filter-container">
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
                        <select name="filter" id="filter">
                            <optgroup label="Filter">
                                <option value="monster">Mönster</option>
                                <option value="priss">Priss</option>
                            </optgroup>

                        </select>
                    </div>
                </article>

                <article className="wrapper container section">

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

                        <li className="main-list-cards flow">
                            <div className="products-list-img-background">
                                <a href="./shell.html">
                                    <img src={unique} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
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
                                    <img src={unique} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
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
                                    <img src={unique} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
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

export default ProductsPage
