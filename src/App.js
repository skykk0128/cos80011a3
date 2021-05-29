import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home/Home';
import NewLesson from './components/NewLesson/NewLesson';
import './App.css';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addlesson" component={NewLesson} />
      </Switch>
    </Router>
  );
}

export default App;
