function Clothes ({itemsForSale}) {

    return(
        <div className="products">
{itemsForSale.map((element => {
    const {id, nameClothes, searchTerm, price, image} = element;

    return(
        <div className="product-card" key={id}>
            <img src={image} width="350px" height="500px" alt="clothes"/>
            <div className="product-info">
                <h3>{nameClothes}</h3>
                <h4>$ {price}</h4>
            </div>
        </div>
    )
}))}
        </div>
    )
}

export default Clothes;