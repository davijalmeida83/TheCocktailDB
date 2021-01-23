import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import CategoryHome from './pages/CategoryHome'
import About from './pages/About'
import DrinksHome from './pages/DrinksHome'
import Error from './pages/Error'

import Navbar from './components/Navbar'
import SingleCocktail from "./pages/SingleCocktail"


export default function App() {
  return <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <CategoryHome />
            </Route> 
            <Route path="/about">
              <About />
            </Route> 
            <Route path="/drinks/:category">
              <DrinksHome />
            </Route> 
            <Route path="/drink/:id">
              <SingleCocktail />
            </Route> 
            <Route path="*">
              <Error />
            </Route> 
          </Switch>
        </Router>
}
