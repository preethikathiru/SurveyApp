const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require('cors')
const users = require("./routes/api/users");
const forms = require("./routes/api/forms");

const app = express();
app.use(cors());



// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(
  db, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
  }).then(() => {
  console.log("MongoDB successfully connected");
  // Routes
  app.use("/api/users", users);
  app.use("/api/forms", forms);

const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
app.use(history());
app.use(serveStatic("./public", { index: ["index.html", "index.htm"] }));

  // process.env.port is Heroku's port if you choose to deploy the app there
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));
}).catch(err => console.log(err));


