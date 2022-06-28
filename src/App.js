import React, { Component } from 'react'
import './App.css'
import AnimeEdit from './pages/AnimeEdit'
import AnimeIndex from './pages/AnimeIndex'
import AnimeNew from './pages/AnimeNew'
import AnimeShow from './pages/AnimeShow'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Home from  './pages/Home'
import Footer from './components/Footer'
import mockAnime from './mockAnime.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      anime: mockAnime
    }
  }
  render() {
    return (
     

      <Router>

  <Header/>
  <h1>We don't know what the them will be -- App.js</h1>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/animeindex" component={AnimeIndex} />
      <Route path="/animeshow" component={AnimeShow} />
      <Route path="/animenew" component={AnimeNew} />
      <Route path="/animeedit" component={AnimeEdit} />
      <Route component={NotFound}/>
    </Switch>
  <Footer/>
</Router>
       
     
    )
  }
}

