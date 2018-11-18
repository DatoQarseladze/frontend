import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Article from './components/Article'
import Mid from './components/Mid'
import Slider from './components/Slider'
import ArticleEnd from './components/ArticleEnd'
import Section from './components/Section'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Main />
      <Article />
      <Mid />
      <Slider />
      <ArticleEnd />
      <Section />
      </div>
    );
  }
}

export default App;
