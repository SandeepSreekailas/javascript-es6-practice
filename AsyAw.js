// Async/Await = Async = makes a function return a promise 
//               Await = makes an async function wait for a promise

// Allows you write asynchronous code in a synchronous manner Async doesn't have resolve or reject parameters Everything after Await is placed in an event queue


function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dogwalked=true
            if(dogwalked){
                resolve("You walked the Dog🐕‍🦺")
            }
            else{
                reject("u are in trouble")
            }
        }, 3000)
    }
    )
    
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let kitchencleaned=true;
            if(kitchencleaned){
                resolve("cleaned the kitchen🫧")
            }
            else{
                reject("going to get kicked out of the house")
            }
        },6000)
    })
}

function througTrash(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let trashingg=true;
            if(trashingg){
                resolve("trash cleared🚮")
            }
            else{
                reject("No food for a week")
            }
        }, 9000)
    })
}


async function tasks() {
    const walkthedog= await walkDog()
    console.log(walkthedog);

    const cleanthekitchen= await cleanKitchen()
    console.log(cleanthekitchen);

    const takeoutthetrash=await througTrash()
    console.log(takeoutthetrash);
    
    console.log("Every task done successfully 🥳");
    
}

tasks()

// fetching url
// const getUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicde.com/users");

//         const user = await response.json();

//         console.log(user);

//     } catch (err) {
//         console.log("something fishy");

//     }
// }

// getUsers()