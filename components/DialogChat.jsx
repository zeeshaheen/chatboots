import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = props => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogChat({ open, setOpen }) {
  const [message, setMessage] = React.useState('');
  const [messagetwo, setMessagetwo] = React.useState('');
  const [sendMessage, setSendMessage] = React.useState(false);
  const [makeTime, setMakeTime] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSend = () => {
    setSendMessage(true);
    setMessagetwo(message);
    setMessage('');
  };

  React.useEffect(() => {
    setMessage &&
      setTimeout(() => {
        setMakeTime(true);
      }, 1000);
  }, [sendMessage]);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        maxWidth='sm'
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          ChatBot
        </BootstrapDialogTitle>
        <DialogContent>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',

              padding: '30px',
              minHeight: 800,
            }}
          >
            <div
              style={{
                backgroundColor: 'lightblue',
                padding: '10px',
                width: '250px',
                borderRadius: '20px',
              }}
            >
              Welcome to ChatBot. How may I help you.
            </div>
            {sendMessage && (
              <div
                style={{
                  position: 'absolute',
                  right: '80px',
                  marginTop: '30px',
                  padding: '10px',
                  backgroundColor: 'lightGreen',
                  borderRadius: '20px',
                }}
              >
                {messagetwo}
              </div>
            )}
            {makeTime && sendMessage && (
              <div
                style={{
                  position: 'absolute',
                  left: '40px',
                  marginTop: '100px',
                  width: '300px',
                  padding: '10px',
                  backgroundColor: 'lightBlue',
                  borderRadius: '20px',
                }}
              >
                Last day to send Application is Jun 30 for BS and July 31 for
                MS. Admission test will start from June 21 for BS and August 02
                for MS
              </div>
            )}
          </Box>
        </DialogContent>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
          style={{ display: 'flex', marginTop: '50px', marginLeft: '40px' }}
        >
          <TextField
            fullWidth
            label='Enter Query'
            id='fullWidth'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '10px',
            }}
          >
            {' '}
            <SendIcon onClick={handleSend} />
          </div>
        </Box>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
