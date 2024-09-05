require("dotenv").config();
const mysql=require('mysql')
const express=require('express')

const cors=require('cors')


const { sendTicketNotification } = require('./emailService');


const app=express()
app.use(express.json())
app.use(cors())

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sih"
})
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err.message);
        return;
    }
    console.log('Connected to the MySQL database successfully!');
});
// mongoose.connect("mongodb://127.0.0.1:27017/users");//localhost sometimes may not work so default address is added instead and last meh add the db name


app.post('/register',(req,res)=>{
    const sql="INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json('Error')
        }
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{
    const sql="SELECT * FROM users WHERE `email`= ? AND `password`= ? ";
    
    db.query(sql,[req.body.email,req.body.password],(err,data)=>{
        if(err){
            return res.json('Error')
        }
        if(data.length>0){
            return res.json("Success");
        }
        else{
            return res.json("Failed")
        }
    })
})
app.listen(3001,()=>{
    console.log("Server is running")
})