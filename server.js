const express = require("express")
const { Socket } = require("socket.io")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const {v4: uuidv4} = require("uuid")

app.set("view engine", "ejs")
app.use(express.static("public"))



app.get("/", (req, res)=>{
    res.redirect(`/${uuidv4()}`)
})

app.get("/:room", (req, res)=>{
    res.render("room", {roomId: req.params.room})
})


io.on("connection", (socket)=>{
    socket.on("join-room", (roomId, userId)=>{
        console.log(roomId, userId)
    })
})


server.listen(3000, ()=>{
    console.log("Server is running")
})