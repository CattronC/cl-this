// ! Exercise 1

// Global
function global(){
    console.log(this)
}
console.log(global);


// Object Method
const user = {
    firstName: "Pat",
    lastName: "Smith",
    fullname: function() {
        console.log(this);
    }
}

user.fullname();


// arrow in object
const arrow = {
    func: ()=> {console.log(this);}
}

console.log(arrow);
arrow.func();

// ! Exercise 2
// ! Exercise 3
// ! Exercise 4
// ! Exercise 5
// ! Exercise 6
// ! Exercise 7
// ! Exercise 8
// ! Exercise 9