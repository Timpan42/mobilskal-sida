import "./products.css"

import { Link } from "react-router-dom"


import plastic from "../assets/plastic.jpg"
import unique from "../assets/unique.jpg"
import DropDown from "../componets/DropDown"
import GridProdocts from "../componets/GridProdocts"


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


                <DropDown />

                <article className="wrapper container section">

                    <ul className="features grid" role="list">

                        <GridProdocts
                            LINK={"/ShellPage"}
                            IMG={plastic}
                            IMG_ALT={"Bild på ett telefon läderskal med texten 'Nyheter'."}
                            NAME={"Backsippor"}
                            MATERIAL={"läder"}
                            PHONETYPE={"Phone 15"}
                            PRICE={"399 SEK"}
                        />

                        <GridProdocts
                            LINK={"/ShellPage"}
                            IMG={plastic}
                            IMG_ALT={"Bild på ett telefon läderskal med texten 'Nyheter'."}
                            NAME={"Blåstjärnor"}
                            MATERIAL={"läder"}
                            PHONETYPE={"Phone 15"}
                            PRICE={"399 SEK"}
                        />

                        <GridProdocts
                            LINK={"/ShellPage"}
                            IMG={plastic}
                            IMG_ALT={"Bild på ett telefon läderskal med texten 'Nyheter'."}
                            NAME={"Fläder"}
                            MATERIAL={"läder"}
                            PHONETYPE={"Phone 15"}
                            PRICE={"399 SEK"}
                        />

                        <GridProdocts
                            LINK={"/ShellPage"}
                            IMG={unique}
                            IMG_ALT={"Bild på ett telefon läderskal med texten 'Nyheter'."}
                            NAME={"Backsippor"}
                            MATERIAL={"läder"}
                            PHONETYPE={"Phone 15"}
                            PRICE={"399 SEK"}
                        />

                        <GridProdocts
                            LINK={"/ShellPage"}
                            IMG={unique}
                            IMG_ALT={"Bild på ett telefon läderskal med texten 'Nyheter'."}
                            NAME={"Blåstjärnor"}
                            MATERIAL={"läder"}
                            PHONETYPE={"Phone 15"}
                            PRICE={"399 SEK"}
                        />

                        <GridProdocts
                            LINK={"/ShellPage"}
                            IMG={unique}
                            IMG_ALT={"Bild på ett telefon läderskal med texten 'Nyheter'."}
                            NAME={"Fläder"}
                            MATERIAL={"läder"}
                            PHONETYPE={"Phone 15"}
                            PRICE={"399 SEK"}
                        />

                    </ul>
                </article>
            </main>
        </>
    )
}

export default ProductsPage
