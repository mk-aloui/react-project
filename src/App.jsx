import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import {
  Route, Switch
} from "react-router-dom";
import Login from './Login';
import Gerer from './Gerer';
import './App.css';
import Signup from './Signup';
// import LoginControl from './LoginControl';
import React, { useState } from 'react'


function App() {
  const [a, seta] = useState(0);
  const seh = () => {
    seta(1)


  }
  return (
    <div className="App">
      <Header a={a} />
      <Switch>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route path="/MainContent">
          <MainContent />
        </Route>
        <Route path="/Login">
          <Login fna={seh} />
        </Route>
        <Route path="/Signup">
          <Signup >
          </Signup>
        </Route>
        <Route path="/Gerer">
          <Gerer />
        </Route>
      </Switch>
      <Footer />
    </div>

  );
}

export default App;