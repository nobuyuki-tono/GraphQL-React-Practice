import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import LessonList from "./components/LessonList";
import AddLesson from "./components/AddLesson";

import "./App.css";

// Apollo Client set up
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LessonList />
        <AddLesson />
      </div>
    </ApolloProvider>
  );
}

export default App;
