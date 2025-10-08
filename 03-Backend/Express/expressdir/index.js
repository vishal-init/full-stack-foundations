const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

// used for all routes
// app.use((req, res) => {
//   console.log('request recieved');
//   res.send("this is a basic response");
// })

// routing
app.get("/", (req, res) => {
    res.send("you contacted the root path");
})

// path finder
app.get("/:user/:id", (req, res) => {
    console.log(req.params);
    res.send("you contacted the root path");
}) 

// query strings
app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no results")
})

// app.get("/home", (req, res) => {
//     res.send("you contacted the home path");
// })

// app.get("/search", (req, res) => {
//     res.send("you contacted the search path");
// })

// app.get(/.*/, (req, res) => {
//     res.send("this path does not exist");
// })

// app.post("/", (req, res) => {
//     res.send("you send a post request");
// })


// app.use((req, res) => {
//   res.status(404).send("404 - Page not found");
// });