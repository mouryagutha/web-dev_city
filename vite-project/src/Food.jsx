function Food()
{
    const food1 = "mango";
    const food2 = "banana";
    return(
        <ul>
            <li>apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>

    );
}

export default Food