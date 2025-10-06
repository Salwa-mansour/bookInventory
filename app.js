// express server
const express = require("express")
const app = express();
const path = require("path");
const dotenv =require('dotenv');
dotenv.config({ path: 'config.env' });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));


//------------------

//routes
app.use('/',require(path.join(__dirname,'routers','categoryRouter')));
app.use('/authors',require(path.join(__dirname,'routers','authorRouter')));
//------------------
app.use('/{*splat}', async (req, res) => {
   // *splat matches any path without the root path. If you need to match the root path as well /, you can use /{*splat}, wrapping the wildcard in braces.
   //res.sendFile(path.join(__dirname,'views','404.html'))
     res.render("404", { message: `error`});
 });

const PORT = process.env.urlPORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});