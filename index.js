const express = require('express');
require('./config');
const app = express();
const myData = require('./MyData');

app.use(express.json());
app.post("/create",async (request,response)=>{
    let data = new myData(request.body);
    let result = await data.save();

    console.log(result);
    response.send("Data posted");
});

app.get("/list",async (request,response)=>{
    let data = await myData.find({});
    response.send(data);
});

app.delete("/delete/:_id",async (request,response)=>{
    let data = await myData.deleteOne( {id:request.params.id});
    response.send(data);
});

app.put("/update/:_id", async (request,response)=>{
    console.log(request.params._id);
    let data = await myData.updateOne(
        request.params,
        { 
            $set : request.body
        }
    );
    response.send(data);
});

app.listen(5000);