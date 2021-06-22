import React from "react"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Continents from "./components/Continents"
import Countries from "./components/Countries"
import Homepage from "./components/Homepage"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/continents" component={Continents} />
      <Route exact path="/continents/:id" component={Countries} />
    </Router>
  );
}

export default App