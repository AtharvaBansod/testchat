const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    res.send("hellow sumeet....")
})

app.listen(5002, console.log(`App started`)
)



// app.get("/",(req,res)=>{
//     res.send("API is running")
// })