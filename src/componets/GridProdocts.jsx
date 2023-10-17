
import { Link } from "react-router-dom"

import { useState } from 'react'

function GridProdocts(props) {
    let { PRODUCT_ID, LINK, IMG, IMG_ALT, NAME, MATERIAL, PHONETYPE, PRICE } = props

    const [productId, setProductId] = useState(0)

    function storeData() {
        setProductId(PRODUCT_ID)
    }

    return (
        <li className="main-list-cards flow">
            <div className="products-list-img-background">
                <Link to={LINK} onClick={storeData}>
                    <img src={IMG} alt={IMG_ALT} />
                    <div className="products-list-elements">
                        <h3>
                            {NAME}
                        </h3>
                        <p>
                            {MATERIAL}
                        </p>
                        <p>
                            {PHONETYPE}
                        </p>
                        <p>
                            {PRICE} SEK
                        </p>
                    </div>
                </Link>
            </div>
        </li>
    )

}

export default GridProdocts