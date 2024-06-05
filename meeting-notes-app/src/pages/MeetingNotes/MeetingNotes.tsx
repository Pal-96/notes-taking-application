import DisplayMeetingNotes from '../../components/display-notes-component.tsx';
import { useState, useEffect } from 'react';
import { MeetingNote, meetingnotes } from '../../models/MeetingNote.ts';
import PopupForm from '../../components/form-popup-component.tsx';

function MeetingNotesPage() {
  const [meetingNotes, setMeetingNotes] = useState<MeetingNote[]>(meetingnotes);

  useEffect(() => { 
    fetch('http://localhost:3001/meetingNotes', {method:'GET'})
      .then(response => response.json())
      .then(data => setMeetingNotes(data))
      .catch(error => console.error('Error fetching meeting notes:', error));
  }, []);

  const handleNoteAdded = (newNote: MeetingNote) => {
    setMeetingNotes(prevNotes => [...prevNotes, newNote]);
  };

  return (
    <>
    <DisplayMeetingNotes meetingnotes={meetingNotes}></DisplayMeetingNotes>
    <PopupForm open={false} onClose={() => {}} onNoteAdded={handleNoteAdded} onEditNote={false}></PopupForm>
    </>
  )
}



export default MeetingNotesPage;