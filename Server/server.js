import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());


const datasend = [{"users":["One1","One2","One3"]},{"users":["two1","two2","two3"]},{"users":["three1","three2","three3"]}]

app.get("/api",(req,res)=>{
    let counter = parseInt(req.query.counter);
    res.send(datasend[counter%3]);
    console.log(counter)
})


app.listen(3001, ()=>{console.log("server started")});