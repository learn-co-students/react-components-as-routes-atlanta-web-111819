import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import NavBar from './Navbar'



ReactDOM.render(
 <Router>
   <div>
     <NavBar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/about" component={About}/>
   </div>
 </Router>,
  document.getElementById('root')
);
