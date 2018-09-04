import React, { Component } from 'react';
import  Header from './components/Header'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Profile from './components/Profile'
import './App.css';

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div className="Container">
        <Header />
        <section>
          <Blog />
          <Profile />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
