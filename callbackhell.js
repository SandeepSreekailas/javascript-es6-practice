// Callback Hell :- Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read. Old pattern to handle asynchronous functions. Use Promises + async/await to avoid Callback Hell

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 Completed");
        callback()
    }, 2000)    
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 Completed");
        callback()
    }, 4000)    
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 Completed");
        callback()
    }, 6000)    
}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 Completed");
        callback()
    }, 8000)    
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All Tasks Completed");
            })
        })
    })
})
// the above code is just a simple example a callback hell can become worse than this