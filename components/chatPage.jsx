import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DialogChat from './DialogChat';

export default function ChatPage() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ backgroundColor: 'green' }}>
      <Box
        sx={{ '& > :not(style)': { m: 1 } }}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          width: '100%',
          height: '100%',
          backgroundImage: `url('/images/bc.png')`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: '0px',
            right: '0px',
          }}
        >
          <Fab color='secondary' aria-label='add' onClick={() => setOpen(true)}>
            <ChatBubbleOutlineIcon />
          </Fab>
        </div>

        <DialogChat open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
}
