
const fs = require("fs")

//creat object
const person = {
    fname:"ahmed",
    lname: "hosam",
    age: 20,
    city: "Alex",
}

//chsnge object to JSON
const personjson = JSON.stringify(person)
//store in file
fs.writeFileSync("data.json", personjson)
//read the file (json)
fs.readFileSync("data.json").toString()
//Convert to object
const presonobj = JSON.parse(personjson)


//update the data
person.fname="Adel"
person.lname="Ahmed"
person.age=40
person.city="Cairo"
//convert object to JSON
const personJson = JSON.stringify(person)
//store in file
fs.writeFileSync("data.json", personJson)
