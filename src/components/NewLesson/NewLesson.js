import {
  Paper,
  FormControl,
  InputLabel,
  Input,
} from '@material-ui/core';
import './NewLesson.css';

const newLesson = () => {
  return (
    <div className="container">
      <Paper>
        <div>New Lesson</div>
        <form className="form">
          <FormControl>
            <InputLabel htmlFor="name">Lecturer Name</InputLabel>
            <Input id="name" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="lessonname">Lesson Name</InputLabel>
            <Input id="lessonname" />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="description">Lesson Description</InputLabel>
            <Input id="description" />
          </FormControl>
        </form>

      </Paper>
    </div>
  )
}

export default newLesson;
