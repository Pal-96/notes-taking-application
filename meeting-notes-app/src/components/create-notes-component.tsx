import Button from '@mui/material/Button';
import React, { useState } from 'react';
import PopupForm from '../components/form-popup-component';
const CreateNote: React.FC = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
          <Button variant="contained" onClick={handleOpen}>
            Create Note
          </Button>
          <PopupForm open={open} onClose={handleClose} onNoteAdded={()=>{}} onEditNote={false}/>
        </>
      );
    };

export default CreateNote;