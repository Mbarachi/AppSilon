import React, { Component } from 'react';
import TopNav from './components/top-nav/TopNav';
import SideNav from './components/side-nav/SideNav'
import './App.css';
import MainSection from './components/main-section/MainSection';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <TopNav/>
        <SideNav/>
        <MainSection/>
      </div>
    );
  }
}

export default App;
