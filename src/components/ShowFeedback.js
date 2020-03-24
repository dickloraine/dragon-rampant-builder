import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => <MuiAlert elevation={6} variant="filled" {...props} />;

const ShowFeedback = ({ feedback, setFeetback }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFeetback({ ...feedback, open: false });
  };

  return (
    <Snackbar open={feedback.open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={feedback.severity}>
        {feedback.message}
      </Alert>
    </Snackbar>
  );
};

export default ShowFeedback;
