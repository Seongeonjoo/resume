import React from "react";
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
