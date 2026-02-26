// Promise = An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code} "I promise to return a value" PENDING -> RESOLVED or REJECTED new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let dogwalked=false
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

walkDog().then(value=>{console.log(value); return cleanKitchen()})
        .then(value=>{console.log(value);  return througTrash()})
        .then(value=>{console.log(value);console.log("finished all the work")})
        .catch(error=> console.error(error))
        


//  Extra
// const Mypromise = new Promise((resolve, reject) => {
//     let internetworking=true
//     if (internetworking){
//         resolve("Got the data")
//     }
//     else{
//         reject("Sry Buddy")
//     }
// })

// Mypromise
// .then(result =>{
//     console.log(result);
    
// })
// .catch(error=>{
//     console.log(error);
    
// }
// )

// const data = fetch("https://jsonplaceholder.typicode.com/users")

// .then(response=>{
//     return response.json();
    
// })
// .then(data =>{
//     console.log(data);
    
// }
// ).catch((err)=>{
//     console.log(err);
    
// })
