import React from 'react';
import {
  Button,
} from '@material-ui/core';
import {
  useHistory,
} from 'react-router-dom';
import './Home.css';

const Home = () => {
  const history = useHistory();

  const addLessonPage = () => {
    history.push('/addlesson');
  }

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Swindemy</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={addLessonPage}
          >
            Add a new lesson here
          </Button>
        </header>
      </div>
    )
}

export default Home;
