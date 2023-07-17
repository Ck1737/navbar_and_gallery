import React from 'react';
import { Route,Switch } from "react-router-dom";
// import './App.css';

import Navbar from './component/Navbar';
import Home from "./pages/home/home";
import Photos from "./pages/photos/photos";
import Bio from "./pages/bio/bio";
import Blog from "./pages/blog/blog"
import Contect from "./pages/contect/contect";
import Error from './Error';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/photos" component={Photos} />
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contect" component={Contect} />
      <Route component={Error}/>
    </Switch>
     
    </>
  )
}

export default App;
