import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import TodoListLandingPage from "./Components/TodoList";
import FoodList from "./Components/FoodList";
import HomePage from "./Components/Home";
import MovieList from "./Components/MovieList";


export default function App() {

  return(
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-ligh" >
        <ul>
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/TodoList'} className="nav-link"> Todo List </Link></li>
        <li><Link to={'/FoodList'} className="nav-link"> Food List </Link></li>
        <li><Link to={'/MovieList'} className="nav-link"> Movie List </Link></li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/TodoList' component={TodoListLandingPage}  />
        <Route path='/FoodList' component={FoodList} />
        <Route path='/MovieList' component={MovieList} />
      </Switch>

  </Router>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
