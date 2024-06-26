// const { log, error } = require("console");
const express = require("express");
const morgan = require('morgan')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

morgan.token('type',(req,res)=> JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[Content-Length] - :response-time ms :type'))


const persons = [
    {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
},
{
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
},
{
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
},
];

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/info", (req, res) => {
    const length = persons.length;
    const now = new Date();
    console.log(length);
    res.send(`
        <p>phonebook has info for ${length} people</p>
        <p>${now}</p>`);
    });
    
    app.get("/api/persons/:id", (req, res) => {
        const id = req.params.id;
        console.log("id:", id);
        const person = persons.find((person) => person.id === id);
        
        if (!person) {
            res.status(400).end();
        } else {
            res.json(person);
        }
    });
    
    app.delete("/api/persons/:id", (req, res) => {
        const id = req.params.id;
        const person = persons.filter((person) => person.id === id);
        console.log(person);
        res.status(204).end()
    });

    
    const generateId = ()=>{
        const randID = Math.floor(Math.random()* 1000000000)
        return String(randID)
}

app.post('/api/persons',(req,res)=>{
    const body = req.body
    console.log("body:",body);
    if (!body.name || !body.number) {
        return res.status(400).json({
        error:"Number and Name is missing"})
    }
    console.log("name:",body.name);
    console.log("number:",body.number);
    const personName = persons.find(person=>person.name===body.name)
    console.log(personName);
    if (personName) {
        return res.status(400).json({
            "error":"name must be unique"
        })
    }
    const person = {
        id:generateId(),
        name:body.name,
        number: body.number
    }

    persons.push(person)
    res.json(person)
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
