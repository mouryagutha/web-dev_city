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

function Person1(name ,age)
{
    this.name = name;
    this.age = age;
}
1
const person2 = new Person1("elon musk" , 58);

console.log(person2);

class Person{
    constructor(name ,age)
    {
        this.name =name;
        this.age = age;
    }
    greet()
    {
        return "hello "+ this.name;
    }
    changename(newname){
        this.name = newname;
    }
}

const person1 = new Person("elon musk ", 56);


console.log(person1.greet());
person1.changename("mourya kumar");
console.log(person1.name);

//getter and setter

