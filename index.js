const express = require('express');
const app = express();
// we also have to require path package as we are using path.join
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public'))); //basically hm yeh keh rhy hain kay express ap static files ko is path p dhondna (path.join(__dirname,'public')) and woh chala jay ga app.use mai like a middleware

// this above line means that all the static files like images , stylesheets and javascript in sab ko find karny kay liyay ap public folder mai jana bus 
// // let's understand what is __dirname it means that poora path apkay current folder tak ka aa jay ga and agar mai is kay sath /public jor don to yeh poora C:\Users\PMLS\Documents\Backend\Lecture 6 say C:\Users\PMLS\Documents\Backend\Lecture 6/public yeh ban jay ga ab agay / laga kay public folder bh sath lag jay ga .....

// console.log(__dirname + '/public');
// will give us C:\Users\PMLS\Documents\Backend\Lecture 6/public

app.set('view engine','ejs'); // we are saying that or app ko setup kardo to show on frontend ejs pages simply

app.get("/", function(req,res){
   res.render("index"); // render matlb ab index ko lay kar aao 
})
// // in simple words I am saying that ap jab bh / is route p jao to index.ejs ko lay aao ya show karwao ussay 

app.get("/profile/:username", function(req,res){//colon ka matlb h yeh part ab dynamic h so we can write /marym 
  // req.params.username()  
  // request.params ka matlb h aisa kuch bh jis kay agay colon h and .username is liyay bcz .username wala part h dynamic  
  res.send(req.params.username); // wapis frontend p bheja h
})  

app.get("/profile/:username/:age", function(req,res){
  res.send(`Hello ${req.params.username} your age is : ${req.params.age}`);
}) 

app.listen(3000,function(){
  console.log("Its running !")
})

