import React, {useState} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { MeetingNote } from '../models/MeetingNote';
type Props = {
  open: boolean;
  onClose: () => void;
  onNoteAdded: (newNote: MeetingNote) => void;
  onEditNote: boolean;
  note?: MeetingNote;
};

const PopupForm: React.FC<Props> = ({ open, onClose, onNoteAdded, onEditNote, note }) => {
    const [title, setTitle] = useState(note?note.title:'');
    const [content, setContent] = useState(note?note.content:'');
    const [actionItems, setActionItems] = useState(note?note.actionItems.join(';'): '');

    // Function to handle the actions when new note is submitted
    const handleSubmit = async () => {
            fetch('http://localhost:3001/meetingNotes', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title,
                content,
                actionItems: actionItems.split(';').map(item => item.trim()), // Split action items by ';' and trim whitespace
                creationDate: new Date().toISOString(), // Add creation date
              }),
            })
            .then(response => response.json())
            .then(data => {
                // Trigger the onNoteAdded callback with the newly created note
                onNoteAdded(data);
                // Close the dialog
                onClose();
                window.location.reload();
            })
            .catch(error => console.error('Error creating new note:', error));
        };
        
        // Function to handle the actions when existing note is edited
        const handleEdit = async () => {
          fetch(`http://localhost:3001/meetingNotes/${note.noteId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title,
              content,
              actionItems: actionItems.split(';').map(item => item.trim()), // Split action items by ';' and trim whitespace
              creationDate: new Date().toISOString(), // Add creation date
            }),
          })
          .then(response => response.json())
          .then(() => {
              onClose();
              window.location.reload();
          })
          .catch(error => console.error('Error creating new note:', error));
      };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{onEditNote? 'Edit Note': 'Create a new Note'}</DialogTitle>
      <DialogContent>
      <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Content"
          fullWidth
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Action Items (Separate by ';')"
          fullWidth
          value={actionItems}
          onChange={(e) => setActionItems(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button variant='contained' onClick={onEditNote? handleEdit: handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupForm;