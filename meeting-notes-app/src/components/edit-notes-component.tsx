import Button from '@mui/material/Button';
import React, { useState } from 'react';
import PopupForm from '../components/form-popup-component.tsx';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import '../pages/MeetingNotes/MeetingNotes.css';
import { MeetingNote } from '../models/MeetingNote.ts';
type Props = {
    note: MeetingNote;


}
export const EditNote: React.FC<Props> = ({note}) => {
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleEdit = () => {
        setOpen(true);
        setEdit(true);
    };

    return (
        <>
        <Button variant="contained" className="edit-icon-button" onClick = {handleEdit}><BorderColorRoundedIcon /></Button>
        <PopupForm open={open} onClose={handleClose} onNoteAdded={()=>{}} onEditNote={edit} note={note} />
        </>
      );
    };

export default EditNote;