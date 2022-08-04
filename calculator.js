const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
       res.sendFile(__dirname + "/calculator.html")
})

app.post("/",function(req, res){

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1+num2;
    res.send("Your Total is " + result);
})

// BMI calculator Code 

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html")
})

app.post("/bmi", function(req, res){
    let weight = Number(req.body.weight1)
    let height = Number(req.body.height2)

    let result = weight/(height*height)

    res.send("Your BMI is "+ result )
})

app.listen(3000, function(){
    console.log("Listening on port 3000")
})