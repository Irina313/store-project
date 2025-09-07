import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Clothes from "./Clothes";
import './App.css';


function Shop() {
    const [clothes, setClothes] = useState(data);

const chosenClothes = (searchTerm) => {
  const newClothes=data.filter(element =>element.searchTerm===searchTerm);
  setClothes(newClothes);
}

return (
    <div>
       
    <div className="cont">
    <h1 className="back">MARSEGO</h1>
    </div>
    <Buttons filteredClothes={chosenClothes}/>
    <Clothes itemsForSale={clothes}/>
    </div>
  );

}

export default Shop;