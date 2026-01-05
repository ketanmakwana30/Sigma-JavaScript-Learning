//ARRAY METHODS

// forEach method

let arr = [1, 2, 3, 4 ,5];

// let print = function (el){           //Simple way
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach( (el) => {              //Direct function
//     console.log(el);
// })
// arr.forEach( function (el){         //Arrow function
//     console.log(el);
// })

let students = [
    {
    name:'ketan',
    marks:89
    },
    {
    name:'DK',
    marks:90
    },
    {
    name:'Rv',
    marks:98
    }
];

// students.forEach( (student) => {
//     console.log(student.name, student.marks);
    
// });


// map method

let gpa = students.map( (el) => {
    return el.marks / 10;
});


let square = arr.map( (el) => {             //map method
    return el * el;
});


// filter method

let num = [1, 3, 4, 5, 6, 7, 10, 11, 12, 13];
let fil = num.filter( (el) => {
    return el % 2 == 0 ; 
});
console.log(fil);
