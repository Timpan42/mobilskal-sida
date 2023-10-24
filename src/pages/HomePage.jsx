import "./home.css"

import { Link } from "react-router-dom"


import lether from "../assets/lether.jpg"
import design from "../assets/new_design.jpg"
import newImg from "../assets/new.jpg"
import pattern from "../assets/pattern.jpg"
import plastic from "../assets/plastic.jpg"
import popular from "../assets/popular.jpg"
import print from "../assets/print.jpg"
import silicon from "../assets/silicon.jpg"
import unique from "../assets/unique.jpg"






function HomePage() {
    return (
        <>
            <main>
                <article className="top-container section">
                    <div className="wrapper flow top-container-box">
                        <h1>
                            Mix TroveCase
                        </h1>

                        <h2>
                            Cases that are made with the best quality
                        </h2>
                        <Link to="/ProductsPage" >
                            <button>
                                Utforska skal
                            </button>
                        </Link>
                    </div>
                    <div className="margin-block">

                    </div>
                </article>

                <article className="section">
                    <div className="container">
                        <h2 className="center">
                            Populärt just nu
                        </h2>

                        <ul className="wrapper grid" role="list" data-layout="50-50">

                            <li className="main-list-cards flow">
                                <div className="main-list-img-background">
                                    <img src={popular} alt="Bild på ett svart telefon skal med texten 'Populär'." />
                                    <div className="main-list-elements">
                                        <p>
                                            Populär
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li className="main-list-cards flow">
                                <div className="main-list-img-background">
                                    <img src={newImg} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                    <div className="main-list-elements">
                                        <p>
                                            Nyheter
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <div className="container">
                                <ul className="wrapper">
                                    <li className="main-list-cards flow">
                                        <div className="main-list-img-background">
                                            <img src={design} alt="text" />
                                            <div className="main-list-elements">
                                                <p>
                                                    Skal till den nyaste telefonen ps det kan vara en iphone
                                                </p>
                                                <button>
                                                    Utforska
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </ul>
                    </div>
                </article>

                <article className="wrapper container section">
                    <h2 className="center">
                        Våra typer av skal
                    </h2>
                    <ul className="features grid" role="list">
                        <li className="main-list-cards flow">
                            <div className="main-list-img-background">
                                <img src={lether} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                <div className="main-list-elements">
                                    <p>
                                        Läder skal
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="main-list-img-background">
                                <img src={plastic} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                <div className="main-list-elements">
                                    <p>
                                        Plast skal
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="main-list-img-background">
                                <img src={silicon} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                <div className="main-list-elements">
                                    <p>
                                        Silicon skal
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="main-list-img-background">
                                <img src={unique} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                <div className="main-list-elements">
                                    <p>
                                        Unik skal
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="main-list-img-background">
                                <img src={print} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                <div className="main-list-elements">
                                    <p>
                                        Skal med print
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="main-list-cards flow">
                            <div className="main-list-img-background">
                                <img src={pattern} alt="Bild på ett telefon läderskal med texten 'Nyheter'." />
                                <div className="main-list-elements">
                                    <p>
                                        Mönstrade skal
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </article>
            </main>

        </>
    )
}

export default HomePage