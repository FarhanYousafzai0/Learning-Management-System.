import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, Grid, InputAdornment } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GradeIcon from '@mui/icons-material/Grade';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '80%', md: '60%', lg: '40%' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const QuizModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formFields, setFormFields] = React.useState({
    question: '',
    deadline: '',
    time: '',
    max_marks: '',
    batch_no: '',
    course_name: ''
  });

  const { question, deadline, time, max_marks, batch_no, course_name } = formFields;

  const handleValue = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const handleAddQuiz = async() => {
    const response = await axios.post('http://localhost:5001/api/quiz/add-quiz',{
      question, deadline, time, max_marks, batch_no, course_name 
      
    })
    console.log(response)
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='contained' sx={{ background: '#1372CC', '&:hover': { background: '#6DA8DF' } }}>
        Add New Quiz
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
            Add a Quiz
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Question"
              value={question}
              onChange={handleValue}
              name='question'
              variant="outlined"
              margin="normal"
              placeholder="Enter your question here..."
            />
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  value={deadline}
                  onChange={handleValue}
                  name='deadline'
                  variant="outlined"
                  margin="normal"
                  type="date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  value={time}
                  onChange={handleValue}
                  name='time'
                  label="Time"
                  variant="outlined"
                  margin="normal"
                  type="time"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccessTimeIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              value={max_marks}
              name='max_marks'
              label="Marks"
              onChange={handleValue}
              variant="outlined"
              margin="normal"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GradeIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              value={course_name}
              name='course_name'
              label="Course Name"
              onChange={handleValue}
              variant="outlined"
              margin="normal"
              placeholder="Enter course name..."
            />
            <TextField
              fullWidth
              label="Batch No"
              value={batch_no}
              name='batch_no'
              variant="outlined"
              margin="normal"
              type="number"
              onChange={handleValue}
              placeholder="Enter batch number..."
            />
            <Button
              onClick={handleAddQuiz}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              sx={{ mt: 2, background: '#28C495', '&:hover': { background: '#1e9c7a' } }}
              fullWidth
            >
              Add Quiz
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default QuizModal;
