import "./products.css"

import DropDown from "../componets/DropDown"
import GridProdocts from "../componets/GridProdocts"

import { useEffect, useState } from 'react'



function ProductsPage() {

    const [data, setData] = useState([])

    async function fetchData() {
        await fetch('http://localhost:3000/product')
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

                {/* Inte klar */}
                <DropDown />

                <article className="wrapper container section">

                    <ul className="features grid" role="list">

                        {data.data ? (
                            <>
                                {data.data.map((data, index) =>
                                    <GridProdocts
                                        key={index}
                                        PRODUCT_ID={data.id}
                                        LINK={"/ShellPage"}
                                        IMG={data.picture}
                                        IMG_ALT={"picture of a shell"}
                                        NAME={data.name}
                                        MATERIAL={data.categories[0].categoryId}
                                        PHONETYPE={data.phonemodel[0].phoneModel}
                                        PRICE={data.price}
                                    />
                                )}
                            </>
                        ) : (
                            <p>Products is currently loading</p>
                        )}
                    </ul>
                </article>
            </main>
        </>
    )
}

export default ProductsPage
