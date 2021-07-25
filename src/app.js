const express=require("express");
const app= express();
const hbs = require("hbs");
const path=require("path");
const port= process.env.PORT||8000;

const staticPath=path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.get('/', function (req, res) {
    res.render('home');
});
app.get("*", (req, res) => {
    res.render("404error", { error: "Oops... Page couldn't be found" });
})   

app.listen(port, ()=>{
    console.log(`App listening to the port no. ${port}`);
});