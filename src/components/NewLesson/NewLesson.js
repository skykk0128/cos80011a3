import {
  Paper,
  FormControl,
  InputLabel,
  Input,
  Button,
  withStyles,
} from '@material-ui/core';
import axios from 'axios';
import './NewLesson.css';

const AWS = require('aws-sdk');
// eslint-disable-next-line
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});

const styles = {
  form: {
    width: 400,
    margin: '0 auto',
    padding: 20,
  },
  element: {
    marginBottom: 20,
  }
};

const newLesson = ({ classes }) => {
  const handleSubmit = async (name, lessonname, description, deliverytime) => {
    await axios.post(
      'https://l9cajjcykc.execute-api.us-east-1.amazonaws.com/Prod',
      {
        name, lessonname, description, deliverytime
      }
    )
  }
  // const form = document.querySelector("form");
  // form.addEventListener("submit", (event) => {
  //   event.preventDefault();

  //   const { name, lessonname, description, deliverytime } = event.target;
  //   const endpoint =
  //     "<https://l9cajjcykc.execute-api.us-east-1.amazonaws.com/Prod/>";
  //   const body = JSON.stringify({
  //     senderName: name.value,
  //     senderLessonName: lessonname.value,
  //     description: description.value,
  //     deliverytime: deliverytime.value
  //   });
  //   const requestOptions = {
  //     method: "POST",
  //     body
  //   };

  //   fetch(endpoint, requestOptions)
  //     .then((response) => {
  //       if (!response.ok) throw new Error("Error in fetch");
  //       return response.json();
  //     })
  //     .then((response) => {
  //       document.getElementById("result-text").innerText =
  //         "Email sent successfully!";
  //     })
  //     .catch((error) => {
  //       document.getElementById("result-text").innerText =
  //         "An unkown error occured.";
  //     });
  // });

  return (
    <div className="container">
      <h2>Swindemy</h2>
      <Paper className={classes.form}>
        <div className="title">Add a New Lesson</div>
        <form className="form">
          <FormControl className={classes.element}>
            <InputLabel htmlFor="name">Lecturer Name</InputLabel>
            <Input id="name" />
          </FormControl>
          <FormControl className={classes.element}>
            <InputLabel htmlFor="lessonname">Lesson Name</InputLabel>
            <Input id="lessonname" />
          </FormControl>
          <FormControl className={classes.element}>
            <InputLabel htmlFor="description">Lesson Description</InputLabel>
            <Input id="description" />
          </FormControl>
          <FormControl className={classes.element}>
            <InputLabel htmlFor="deliverytime">Lesson Delivery Time</InputLabel>
            <Input id="deliverytime" />
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Add a New Lesson
          </Button>
        </form>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(newLesson);
