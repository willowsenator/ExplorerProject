const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res)=>{
    return res.send("<h1>HOME</h1>").sendStatus(200);
});

app.get("/getTransaction", (req, res)=>{
    return res.send("<h1>TRANSACTION</h1>").sendStatus(200);
});

app.get("/getBalance", (req, res)=>{
    return res.send("<h1>BALANCE</h1>").sendStatus(200);
});

app.listen(PORT, ()=>{
    console.log("Listening in %s", PORT);
});