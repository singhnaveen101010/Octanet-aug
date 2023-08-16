import express from "express";
import bodyParser from "body-parser";

const port=3000;
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
     res.render("index.ejs");
})
app.get("/addnew",(req,res)=>{
    res.render("addnew.ejs");
})

app.get("/work",(req,res)=>{
      res.render("index.ejs",{
        list:work
      })
})
app.get("/day",(req,res)=>{
    res.render("index.ejs",{
        list:day
    })
})

app.post("/add",(req,res)=>{
    if(req.body["wheretoadd"]==="day")
       {
        day.unshift(req.body["toadd"]);
       }
       else if(req.body["wheretoadd"]==="work")
       {
        work.unshift(req.body["toadd"]);
       }
       if(req.body["wheretoadd"]==="day" || req.body["wheretoadd"]==="day")
         res.redirect("/"+req.body["wheretoadd"]);
       else {
           res.redirect("back");
       }
     });

app.listen(port,()=>{
    console.log(`started listening on ${port}`);
})

var work=[];
var day=[];