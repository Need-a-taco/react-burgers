
function Food(){
    const food0 = "Fried Chicken Sandwich"
    const food1 = "Ol' Fashion Cheeseburger"
    const food2 = "Delux Spicy Chicken Sandwich"

    return(
        <>
            <ul>
                <li>{food0}</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
            <hr></hr>
        </>
    );
}

export default Food