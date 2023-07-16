const yargs = require("yargs")
const data2 = require ("./data2")

yargs.command({
    command: "add",
    describe: "Add person",
    builder: {
        fname: {
            describe: "The first name ",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "The last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (psn)=> {
        data2.addPerson(psn.id, psn.fname, psn.lname, psn.age, psn.city)
    }
 })

 yargs.command({
    command: "delete",
    describe: "Delete person",
    handler: (psn)=> {
        data2.deleteData(psn.id)
    }
 })


 yargs.command({
    command: "delete2",
    describe: "Delete persons with IDs 4, 5, and 6",
    handler: ()=>{
        data2.deleteData2()
    }
 })

 yargs.command ({
    command: "read",
    describe: "Read data of person",    
    handler: ()=> {
        data2.readData ()
    }
 })


 yargs.command ({
    command:"list",
    describe: "List data of a person",
    handler: ()=>{
        data2.listData()
    }
 })

yargs.parse() 
   
  



