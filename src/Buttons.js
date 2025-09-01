function Buttons({filteredClothes}) {
    return (<div className="cont">
        <button className="change" onClick={() => filteredClothes("blazer")}>Blazers</button>
        <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
        <button className="change" onClick={() => filteredClothes("top")}>Top</button>
        <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
        <button className="change" onClick={() => filteredClothes("skirt")}>Skirt</button>
        <button className="change" onClick={() => filteredClothes("jacket")}>Jacket</button>
        <button className="change" onClick={() => filteredClothes("shirt")}>Shirt</button>
        <button className="change" onClick={() => filteredClothes("leggins")}>Leggins</button>
    </div>)
}

export default Buttons;