import propTypes from 'prop-types'
function Student(props)
{
    return(
        <div className="Student">
            <p>Name :{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isstudent ?"yes": "no"}</p>
        </div>
    );

}
Student.propTypes ={

    name:propTypes.string,
    age: propTypes.number,
    isstudent: propTypes.bool,

}
export default Student