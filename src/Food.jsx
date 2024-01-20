
function Food(){
    const food1 = "Classic American"
    const food2 = "Rou Jia Mo"

    return(
        <>
            <ul>
                <li>Grilled Chicken Sandwich</li>
                <li>{food1}</li>
                <li>{food2.toUpperCase()}</li>
            </ul>
            <hr></hr>
        </>
    );
}

export default Food