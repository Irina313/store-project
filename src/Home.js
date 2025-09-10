import { Link } from "react-router-dom";
import Swal from "sweetalert2";



function Store() {

const handleAlert = () => {
    Swal.fire("Get 15% off on your first order!");
}
   
    return <div className="main">
     <Link to="/shop"><button className="btn">Looking Collection</button></Link>  
     <button className="discount" onClick={handleAlert}>Get 15% OFF</button>
    </div>
    }
    
    export default Store;