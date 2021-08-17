const express = require('express')
const cors = require('cors');
const Recreuiter = require('./Models/Recreuiter');

//Initialiazation
const app = express();
require('./database');
//Settings
const port = process.env.PORT || 5000

//============
//Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

//Global Variables


//Routes
app.get('/', (req, res) =>{

    res.send("hello world")
})
//Users Routes
const recreuiter = require('./Models/Recreuiter'),
  Professional = require('./Models/Professional')

app.post('/signUp/recreuiter', async (req, res) => {
  const {name,logo,website,email,description,password,confirmPassword,} = req.body;
      const errors = [];
      if(password != confirmPassword)
          errors.push({text:'Password do not match'})
      if(password.length<4)
          errors.push({text:"the password must be greater than 4 characters"});
      
      if(errors.length>0)
        res.json({
          "error": errors,
          "data": {name,website,email}
        });
      else{
        
        const newRecreuiter = new recreuiter({name,logo,website,email,password,description})
        newRecreuiter.password = await newRecreuiter.encryptPassword(password);
        await newRecreuiter.save();
        console.log(newRecreuiter._id);
        res.json("ok")
      }
})


app.post('/signUp/professional', async (req, res) => {
  console.log(req.body);
  const {email,password,confirmPassword} = req.body;
      const errors = [];
      if(password != confirmPassword)
          errors.push({text:'Password do not match'})
      if(password.length<4)
          errors.push({text:"the password must be greater than 4 characters"});
      
      if(errors.length>0)
        res.json({
          "error": errors,
          "data": {email}
        });
      else{
        
        const newProfessional = new Professional({email,password})
        newProfessional.password = await newProfessional.encryptPassword(password);
        await newProfessional.save();
        console.log(newProfessional._id);
        res.json("ok")
      }
})

app.post('/signIn', async (req, res) => {

    const {email, password, role} = req.body;
    console.log(role)
    if(role === "As Recreuiter"){

      const Recreuiter = await recreuiter.findOne({email:email});
      
      if(!Recreuiter){
        res.json({message: 'Not Recreuiter found.'})
      }else{
        const match = await Recreuiter.matchPassword(password);
        if(match){
          res.json({message: "ok"});
        }else{
          res.json({message: "Incorrect password"})
        }
      }

    }else{

      const professional = await Professional.findOne({email:email});
      
      if(!Recreuiter){
        res.json({menssge: 'Not Recreuiter found.'})
      }else{
        const match = await professional.matchPassword(password);
        if(match){
          res.json({message: "ok"});
        }else{
          res.json({message: "Incorrect password"})
        }
      }

    }
  })
//Server is listenning
app.listen(port);

app.use((req, res, next) => {
  res.status(404).send('Route not found')
})
console.log('RESTful API server started on: ' + port)