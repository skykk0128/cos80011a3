import React from 'react';
import {
  Button,
  Input,
  InputLabel,
  FormControl,
  withStyles,
} from '@material-ui/core';
import {
  useHistory,
} from 'react-router-dom';
import './Home.css';

const styles = {
  element: {
    marginBottom: 20,
    marginLeft: 100,
  }
};

const Home = ({classes}) => {
  const history = useHistory();

  const addLessonPage = () => {
    history.push('/addlesson');
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Swindemy</h1>
          <Button
            variant="contained"
            color="primary"
            onClick={addLessonPage}
          >
            Add a new lesson here
          </Button>
          <hr />
          <div className="searchbar">
            <FormControl className={classes.element}>
              <InputLabel htmlFor="searchbar">Search Bar</InputLabel>
              <Input id="searchbar" />
            </FormControl>
          </div>
          <hr />
        </header>
      </div>
    )
}

export default withStyles(styles)(Home);
