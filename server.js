const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.local.env" });
const graphqlHTTP = require("express-graphql");

const schema = require("./schema/schema");

const app = express();

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
