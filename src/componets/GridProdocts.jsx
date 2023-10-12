
import { Link } from "react-router-dom"

function GridProdocts(props) {
    let { LINK, IMG, IMG_ALT, NAME, MATERIAL, PHONETYPE, PRICE } = props

    return (
        <li className="main-list-cards flow">
            <div className="products-list-img-background">
                <Link to={LINK} >
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
                            {PRICE}
                        </p>
                    </div>
                </Link>
            </div>
        </li>
    )

}

export default GridProdocts