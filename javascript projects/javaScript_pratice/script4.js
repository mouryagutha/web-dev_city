//object destructing
// in js is a feature  that allow  you extract the properties of objects into variable

const  person = {
    firstname :"elon",
    lastname :"musk"
}

// let fname = person.firstname;
// let lname = person.lastname;

//or

let {firstname:fname , lastname:lname, age = 45} = person;

console.log(age);

//javascript class



