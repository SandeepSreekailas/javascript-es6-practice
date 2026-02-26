// synchronous = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete.

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// asynchronous = Allows multiple operations to be performed concurrently without waiting Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data) Handled with: Callbacks, Promises, Async/Await

// setTimeout(()=>console.log("Task 1"), 4000); // asynchronous code

// console.log("Task 2");
// console.log("Task 4");
// console.log("Task 4");

// if we want to wait for an operation to complete, we use callbacks

function func1(callback){
    setTimeout(()=>{console.log("Task 1");
        callback()
    },4000)
}

function func2() {
    console.log("Task 2");
    console.log("Task 4");
    console.log("Task 4");
}
func1(func2)