const express = require("express");
const path = require("path")
const { connectMongoDB } = require("./connections/Connection");
const { route } = require("./routes/Url");
const {urlModel} =require("./models/Url")
const ejs = require("ejs");
const PORT = 8001;
const app = express();
const {staticRoute}=require("./routes/staticRouter")

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url", route);
app.use("/",staticRoute)

//checking server side rendering
// app.get("/test",async(req,res)=>{
//   const allUrls= await urlModel.find({})
//     return res.render("home",{
//       allUrls:allUrls
//     })
// })

connectMongoDB()
  .then(() => {
    app.listen(PORT, () => console.log(`server is running at ${PORT}`));
  })
  .catch((err) => {
    console.log(`MongoDB error : ${err}`);
  });
