import express from 'express';

const PORT: number=3000;

let app=express();



app.listen(PORT,()=>{
    console.log("server is run on "+PORT);
})
