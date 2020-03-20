const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config/.local.env" });
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

app.use(cors());

// Connect to mongoDB
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => {
    console.log("Connected to DB");
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
