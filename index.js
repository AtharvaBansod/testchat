const express = require('express')
const {chats} = require('./data')

const app = express()

app.get("/",(req,res)=>{
    res.send("hellow sumeet....")
})
app.get("/hi",(req,res)=>{
    res.send("hi")
})
app.get("/api/chats",(req,res)=>{
    res.send(chats)
})

app.listen(5002, console.log(`App started`)
)



// app.get("/",(req,res)=>{
//     res.send("API is running")
// })
