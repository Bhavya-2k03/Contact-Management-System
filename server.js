const express=require('express');
const dotenv=require('dotenv').config();

const app=express();
const port=process.env.PORT  || 5000;

app.use(express.json()); //provides a parser to parse incoming requests, otherwise console.log(req.body) will give undefined.
app.use('/api/contacts',require('./routes/contactRoutes'));

app.listen(port,()=>{  
    console.log(`Server is listning on port ${port}`);
})
