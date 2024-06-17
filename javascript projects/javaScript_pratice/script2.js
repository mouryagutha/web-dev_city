function display(results) {
    console.log('Display function called with result:', results);
}

function add(num1, num2, mycallback) {
    console.log('mycallback is:', mycallback);
    let sum = num1 + num2;
    mycallback(sum);
}

add(10, 20, display);


//objects 

const person = {
    firstname: "elon",
   "last name" :"musk",
    age:40
}

console.log(typeof person);
console.log(person);

//access of objects properties

console.log(person.firstname,person["last name"]);

//update the porperties

person.firstname = "mourya";
console.log(person.firstname);

//add new porperties

person.company = "google";

console.log(person);

//delete properties

delete person.age;
console.log(person);

//nested objects 

person.address = {
    street :"sbi colony",
    town : "madanapalle",
    state :"AP",
    country :" india"

}

console.log(person.address.street);

//check the properties

console.log("age" in person);

for(let prop in person)
    {
       // console.log(prop);
        console.log(prop +" " +person[prop]);
    }


//create the object
const person2 = new Object({firstname : "modi",
    lastname :"jii",
    age : 70});

// person2.firstname = "modi";
// person2.lastname = "jii";
// person2.age = 70;

console.log(person2);

//javascript objects methods

const person3 = {
    firstname : "mourya",
    lastname: "kumar",
    greet: function (){
        console.log("hello world");
    }
}

person3.greet();
