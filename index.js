const express = require('express')
const app = express()
const bodyParser = require("body-parser")


app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))


app.get('/', function (req, res) {
  res.render('index')
})

app.get("/*", function(req, res) {
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function(){
  console.log("website started");
});