import dcs from "./assets/Deluxe-Chicken-Sandwich.webp"
import Button from "./Button";


function Dcs() {
    return(
        <div className="card">
            <img className="card-image" src={dcs} alt="menu picture"></img>
            <h2 className="card-title">Delux Spicy Chicken Sandwich</h2>
            <p className="card-text">
                Paprika, lemonpepper, five spice and cayenne seasoned buttermilk
                marinade. Double breading coated canola oil fried chicken, with
                homemade pickles, garden veggies, house sauce and aged cheddar.
            </p>
            <Button/>
        </div>
    );
}

export default Dcs