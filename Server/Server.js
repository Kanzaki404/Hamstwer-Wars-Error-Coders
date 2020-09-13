const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const {getAllHamsters, search, addHamster} = require('./database.js');

// Middleware
app.use(express.static(__dirname + "/../build"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json());




// Routes

app.get("/hamsters", (req, res) => {

    getAllHamsters(dataOrError => {
  	res.send(dataOrError)
  });
});

app.get("/battle", (req, res) => {
    res.send('battle')
  //     console.log('test',req.query.id)
  //     deleteBoat(req.query.id, dataOrError => {
  //     res.send(dataOrError)
  //   });
});

app.get("/result/:id", (req, res) => {
    res.send('resutl')
  //   console.log(req.body.params)
  // 	addBoat(req.body.params, dataOrError => {
  // 		res.send(dataOrError)
  // 	})
});

app.get("/stats", (req, res) => {
    res.send('stats')
  //   console.log(req.body.params)
  // 	addBoat(req.body.params, dataOrError => {
  // 		res.send(dataOrError)
  // 	})
});

app.post("/upload", (req, res) => {
  	addHamster(req.body.params, dataOrError => {
  		res.send(dataOrError)
  	})
});

app.get("/search", (req, res) => {

  search(req.query, dataOrError => {
  	res.send(dataOrError)
  })
});

app.listen(port, () => console.log("Server is listening on port " + port));
