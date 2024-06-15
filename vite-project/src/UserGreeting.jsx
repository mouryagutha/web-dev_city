function UserGreeting(props) {

    // function mb() {

    //     if (props.isLoggedIn) {
    //         return <h2> welcome to my sample web town{props.username}</h2>
    //     }
    //     else {
    //         return <h2>please log into continue </h2>
    //     }
    // }

    // mb();



    return (props.isLoggedIn ? <h2>welcome to new webpage {props.username}</h2> :
        <h2>please log into new web page</h2>);



}

export default UserGreeting