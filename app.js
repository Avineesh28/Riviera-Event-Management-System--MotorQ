const express = require("express");
const { dirname } = require("path");
const path=require("path");
const app = express();
const hbs= require("hbs");
require("./src/db/conn");
const Register=require("./src/db/registrations");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"/src/views");
const template_path = path.join(__dirname,"/src/views");
app.use(express.static(static_path))
app.set("views",template_path)
app.set("view engine","hbs");
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/register.html"));
});
app.get("/events",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/events.html"));
});
app.get("/events/:",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/registered.html"));
});
app.get("/eventmap",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/eventmap.html"));
});
app.get("/admin",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/adminlanding.html"));
});
app.get("/manage_events",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/CRUD.html"));
});
app.get("/verify",(req,res)=>{
    res.sendFile(path.join(__dirname,"/src/views/Verify.html"));
});
app.listen(port,()=>{
    console.log('Server is running at port no 3000');
});