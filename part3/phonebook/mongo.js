const mongoose = require('mongoose')

if(process.argv.length < 3){
    console.log("give password as argument")
    process.exit(1)
}


const password = process.argv[2]

mongoose.set("strictQuery",false)

const url = `mongodb+srv://phonebook:${password}@phonebook.3q2xskn.mongodb.net/Phonebook?retryWrites=true&w=majority&appName=Phonebook`


mongoose.connect(url)

const phoneSchema = new mongoose.Schema({
    name:String,
    number:String,
})

const PhoneBook = mongoose.model("PhoneBook",phoneSchema)


const name = process.argv[3]
const number = process.argv[4]

const phone = new PhoneBook({
    name:name,
    number:number,
})

phone.save().then(result=>{
    console.log("PhoneBook Saved!");
    // mongoose.connection.close()
})

PhoneBook.find({}).then(result=>{
    result.forEach(phone=>console.log(phone))
    mongoose.connection.close()
})

