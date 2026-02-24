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


const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicde.com/users");

        const user = await response.json();

        console.log(user);

    } catch (err) {
        console.log("something fishy");

    }
}

getUsers()