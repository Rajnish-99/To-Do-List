const express =require("express");
const bodyParser= require("body-parser");
const app= express();
const date = require(__dirname +"/date.js")

let items =["raj", "rajnish "];
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function(req,res){

  let day = date();

res.render("list", {listTitle: day,newListItem: items});
});


// handle post request from the site and add the data
app.post("/",function(req, res){
  let item = req.body.newItem;
 if(req.body.list==="Work"){
   workItems.push(item);
   res.redirect("/Work")
 }
 else{
   items.push(item);
 }
 res.redirect("/");
})
app.get("/work",function(req,res){
  res.render("list",{listTitle: "Work List", newListItem:workItems});
});

app.post("/work",function(req,res){
  let item =req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req,res){
  res.render("about");
})
app.listen(3000, function(){
  console.log("server is up bois!");
});
