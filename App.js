const yargs = require("yargs");
const data=require("./Data")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        data.addperson(x.id,x.fname,x.lname,x.city,x.age)
    }
 })
 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data.deletedata(x.id)
    }
 })
 yargs.command({
    command : "read",
    describe: "read item",
    builder: {
        // id : {
        //     describe: "adding the id ",
        //     demandOption: true,
        //     type: "string"
        // }
    },
    handler: (x)=> {
        data.readdata(x.id)
    }
 })
 yargs.command({
    command:"list",
    describe:"list item",
    handler: ()=>{
        data.listdata()
    }
 })
 yargs.parse() 