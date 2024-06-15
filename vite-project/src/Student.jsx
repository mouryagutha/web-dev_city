import React from "react";

function Student(props) {
    console.log(props);
    return (
        <div className="Student">
            <p>Name :{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent ? "yes" : "no"}</p>
        </div>
    );

}

export default Student