import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Article from './components/Article'
import Mid from './components/Mid'
import Slider from './components/Slider'
import ArticleEnd from './components/ArticleEnd'
import Section from './components/Section'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'




const Home = () => {
  return (
    <>
      <Header />
          <Main />
          <Article />
          <Mid />
          <Slider />
          <ArticleEnd />
          <Section />
          <Footer />
    </>
  )
}

const Product = () => {
  return (
    <div>
      <Header />
          
          <Footer />
    </div>
  )
}



class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Product} />
        </div>
      </Router >
    );
  }
}

export default App;
