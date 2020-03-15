const express = require("express");
const request = require('request');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.json());

console.log("env port: ", process.env.PORT)

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('videos'));
app.use(express.static('pictures'));

//The listener which listen for incomming http requests
app.listen(port, error =>{
    if (error){
        console.log("Error")
    }
    console.log("Server is listening on port 3000")
});

//Returns the frontpage
app.get("/index", (req,res)=>{
    
    return res.sendFile(__dirname + "/public/index.html");
});

//Returns tools page
app.get("/tools", (req, res) =>{
return res.sendFile(__dirname + "/public/tools.html")
});

//Returns a http request
app.get("/toolsExample", (req, res) => {
    request('http://www.google.com', function (error, response, body){
        console.error('error', error);
        console.log('statuscode', response && response.statusCode);
        return res.send(body);
    });
});

//JavaScript page
app.get("/JavaScript", (req,res)=> {
    
    return res.sendFile(__dirname + "/public/js.html");
});

//Node js page
app.get("/nodeJS", (req,res)=> {
    
    return res.sendFile(__dirname + "/public/node.html");
});
//CRUD page
app.get("/crud", (req,res)=> {
    
    return res.sendFile(__dirname + "/public/crud.html");
});

var persons = [
    {name: "Ole",
    infected: "Yes"
    }];
//Create a person in the list above 'persons'
app.post("/person", (req, res) => {
    let person = {
        name: req.body.personname,
        infected: req.body.coronavalue
    };
    persons.push(person);
    console.log(persons)
    return res.send(person)
});

//Returns the list of persons
app.get("/persons", (req, res) => {
    return res.send(persons);
});


//Update a person 
app.put("/updatepersonlist", (req, res) => {
    const personIndex = 0
    let newperson = {
        name: "Mathias",
        infected: "Yes"
    };
    persons[personIndex] = newperson;

    return res.send(persons);
});




app.delete("/deleteperson", (req, res) => {
    persons.splice(0, 1)
    return res.send(persons);
});