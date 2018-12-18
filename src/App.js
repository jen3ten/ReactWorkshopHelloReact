import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    const now = new Date();
    const currentYear = now.getFullYear();

    return (
      <div className="App">
        <Header/>
        <Main/>    
        <Footer year={currentYear}/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit this <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
