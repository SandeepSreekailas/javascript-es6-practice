// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3] or [{key:value}, {key:value}]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON. parse() = converts a JSON string to a JS object


// JSON.stringify() 
// const names=["Messi","Ronaldo","Neymar","Mbappe","Lewandowski","Kane"]

// const person={
//     "name":"Messi",
//     "age":38,
//     "country":"Argentina",
//     "position":"Striker",
//     "skills":["Dribbling","Finishing","Passing"]
// }

// const people=[   {
//         "name": "Messi",
//         "age": 38,
//         "country": "Argentina",
//         "position": "Striker",
//         "isplaying": true
//     },
//     {
//         "name":"Ronaldo",
//         "age":39,
//         "country":"Portugal",
//         "position":"Striker",
//         "isplaying": true
//     },
//     {
//         "name":"Neymar",
//         "age":28,
//         "country":"Brazil",
//         "position":"Striker",
//         "isplaying": true
//     },
//     {
//         "name":"Zlatan Ibrahimovic",
//         "age":41,
//         "country":"Sweden",
//         "position":"Striker",
//         "isplaying": false
//     }  
// ]
// const jsonstring=JSON.stringify(names)

// const jsonstring=JSON.stringify(person)

// const jsonstring=JSON.stringify(people)
// console.log(jsonstring);

// JSON. parse() 
// const peoplestring=`[{"name":"Messi","age":38,"country":"Argentina","position":"Striker","isplaying":true},{"name":"Ronaldo","age":39,"country":"Portugal","position":"Striker","isplaying":true},{"name":"Neymar","age":28,"country":"Brazil","position":"Striker","isplaying":true},{"name":"Zlatan Ibrahimovic","age":41,"country":"Sweden","position":"Striker","isplaying":false}]`

// const jsonobj=JSON.parse(peoplestring)
// console.log(jsonobj);


// import fs from "fs";

// const data = fs.readFileSync("./person.json");
// const parsedData = JSON.parse(data);
// console.log(parsedData);

fetch("people.json")
.then(response => response.json())
// .then(data => console.log(data));
.then(data => data.forEach((value)=>{
    console.log(value.names);
}))
.catch(error => console.log(error));