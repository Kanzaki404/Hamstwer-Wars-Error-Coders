import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import LandingPage from './Pages/LandingPage'
import Arena from './Pages/Arena'
import Stats from './Pages/Stats'
import Upload from './Pages/Upload'
import Gallery from './Pages/Gallery'
import Merchandise from './Pages/Merchandise'
// import Footer from './components/Footer';


function App() {
  return (

    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/arena" component={Arena} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/stats" component={Stats} />
          <Route path="/upload" component={Upload} />
          <Route path="/merch" component={Merchandise} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
