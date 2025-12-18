//All string Methods are Immutable

// Types 
// 1. str.trim();                   //Trim
// 2. str.toLowerCase();            //Lower Case
// 3. str.toUpperCase();            //Upper Case
// 4. str.indexOf();                //IndexOf   ---> Find string
// 5. str.trim().toUpperCase();     //Chaining
// 6. str.slice()                   //Slice     --->Cut 




//trim()

// let str = "    Hello     world!    ";
// str.trim();                                              //OR

// let password = prompt("Enter your password");
// let newPassword = password.trim();              //use trim() method
// console.log(password);



// LowerCase() & UperCase()

// let str = "Apna College";
// str.toLowerCase();
// str.toUpperCase();                   //OR

// let msg = "error";
// console.log(msg.toUpperCase());



// indexOf()

// let msg = "ILoveCodding"; 
// msg.indexOf("Cod")



//Chaining()

// let str = "      Hello World! ";
// let newStr = str.trim();
// console.log("After trim:",newStr); 
// newStr = newStr.toUpperCase();
// console.log("After Upper case:",newStr);         //OR

// let newStr = str.trim().toUpperCase();
// console.log(newStr);



// slice()

// let str = "HelloWorld!";
// console.log(str.slice(0,5));
// console.log(str.slice(5,11));                //OR
// console.log(str.slice(5, str.length));       //OR
// console.log(str.slice(5));  

// console.log(str.slice(-3));     //11-3 => 9     //Negative
// console.log(str.length);



// replace()

let str = "ILoveCoding";
// console.log(str.slice("Love","do"));


