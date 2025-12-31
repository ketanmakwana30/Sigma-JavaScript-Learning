// setTimeout function

console.log("Hello Everyone!");

setTimeout ( () => {
    console.log("Apna College");  
}, 2000);
console.log("Welcome to ");


// setInterval function

// let id = setInterval( () => {
//     console.log("Apna College");  
// }, 2000);

// console.log(id);
// clearInterval(id);                      // Stop 

// let id1 = setInterval( () => {
//     console.log("Sigma college");  
// }, 4000);

// console.log(id1);



// This with arrow function

const student = {
    name: "Ketan",
    age: 19,
    marks: 84,
    prop: this,                 // Global scope

    getName: function (){
        console.log(this);
        return this.name;
    },

    getMarks: () => {
        console.log(this);      //Perent's scope --> window 
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this);  // student
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this);  // window
        }, 2000);
    }

};