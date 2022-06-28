import React, { Component } from 'react'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Home from  './pages/Home'
import Footer from './components/Footer'
import mockCats from './mockCats.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: mockCats
    }
  }
  render() {
    return (
     

      <Router>

  <Header/>
  <h1>We don't know what the them will be -- App.js</h1>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catindex" component={CatIndex} />
      <Route path="/catshow" component={CatShow} />
      <Route path="/catnew" component={CatNew} />
      <Route path="/catedit" component={CatEdit} />
      <Route component={NotFound}/>
    </Switch>
  <Footer/>
</Router>
       
     
    )
  }
}

