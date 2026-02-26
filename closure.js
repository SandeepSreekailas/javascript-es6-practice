// Closure :- A function  defined inside another function, has access to the variables and parameters of its outer function, even after the outer function has returned. 
//            A closure gives you access to an outer function's scope from an inner function.


// function outer(){
//   let x = 10;

//   function inner(){
//     console.log(x);
//   }

//   return inner;
// }

// let result = outer(); // outer finished here ❌
// result();             // inner still knows x 😳
// result();             // inner still knows x 😳


// function outer(){
//   let x = 10;

//   function inner(){
//     x++;
//     console.log(x);
//   }

//   function getcount(){
//     return x;
//   }

//   return {inner, getcount}; // return inner;

// }

// let result = outer();
// result.inner();
// console.log(`the current count is ${result.getcount()}`);
// result.inner();
// console.log(`the current count is ${result.getcount()}`);