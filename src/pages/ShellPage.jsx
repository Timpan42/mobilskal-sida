import "./shell.css"

import { Link } from "react-router-dom"
import plastic from "../assets/plastic.jpg"
import { useEffect, useState, createContext, useContext } from 'react'

import { ProductIdContext } from "../componets/context/ProductContext"
import { CartContext } from "../componets/context/CartContext"


function ShellPage() {
    const { productId } = useContext(ProductIdContext)
    const { addToCart } = useContext(CartContext)

    const [data, setData] = useState([])

    async function fetchData() {
        console.log(productId)
        await fetch(`http://localhost:3000/product/${productId}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result)
            }).catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <main className="nav-padding">
                <article className="shell-flex wrapper container section">
                    <div className="shell-img-flex">
                        <div className="shell-small-img">
                            {data.data ? (
                                <>
                                    <img src={data.data.picture} alt="" />
                                    <img src={data.data.picture} alt="" />
                                    <img src={data.data.picture} alt="" />
                                </>
                            ) : (
                                <p> inte nu</p>
                            )}
                        </div>

                        <div className="shell-main-img">
                            {data.data ? (
                                <>
                                    <img src={data.data.picture} alt="" />
                                </>
                            ) : (
                                <p> inte nu</p>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <div className="shell-product-priss">
                            <div className="shell-flex">
                                {data.data ? (
                                    <>
                                        <h3>{data.data.name}</h3>
                                        <p>{data.data.price} SEK</p>
                                    </>

                                ) : (
                                    <p> inte nu</p>
                                )
                                }

                            </div>
                            <div className="shell-product-priss-button">

                                {data.data ? (
                                    <>
                                        <select name="phoneTyp" id="phoneTyp">
                                            <optgroup label={data.data.brand[0].brand}>
                                                <option value={data.data.phonemodel[0].phoneModel}>{data.data.phonemodel[0].phoneModel}</option>
                                            </optgroup>
                                        </select>

                                    </>

                                ) : (
                                    <p> inte nu</p>
                                )
                                }
                                <div className="shell-buy-button section">
                                    <Link to="/CartPage"><button onClick={() => { addToCart(data.data) }}>KÖP</button></Link>
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
                        {data.data ? (
                            <>
                                <p>{data.data.description}</p>
                            </>

                        ) : (
                            <p> inte nu</p>
                        )
                        }
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


