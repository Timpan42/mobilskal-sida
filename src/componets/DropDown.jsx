function DropDown(props) {

    let { LABEL } = props

    return (

        < article className="container section" >
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
        </article >
    )

}

export default DropDown