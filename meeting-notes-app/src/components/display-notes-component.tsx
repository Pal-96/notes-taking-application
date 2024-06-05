import {ReactElement} from 'react';
import {MeetingNote} from '../models/MeetingNote.ts';
import React from 'react';
import EditNote from './../components/edit-notes-component';
type Props = {
    meetingnotes: Array<MeetingNote>;
}

export function MeetingNotes(props:Props): ReactElement {
    // Function to expand or collapse note on click
    const expandNote = (noteId: number) => {
        const coll = document.getElementById(`${noteId}`) as HTMLElement;
        if (coll) {
            coll.addEventListener("click", () => {
                coll.classList.toggle("active");
                const content = coll.nextElementSibling as HTMLElement;
                const shortCont = coll.querySelector(".short-para") as HTMLElement;
                if (content.classList.contains('display-block')) {
                    content.classList.remove('display-block');
                    shortCont.classList.remove('hidden');
                    content.classList.add('display-none');
                    shortCont.classList.add('visible');
                } else {
                    content.classList.remove('display-none');
                    shortCont.classList.remove('visible');
                    content.classList.add('display-block');
                    shortCont.classList.add('hidden');
                }
            });
        }
    };
    return (
        <>
            {props.meetingnotes.map(note => (
                <div key={note.noteId} className="note">
                    <button type="button" id= {`${note.noteId}`} className="collapsible" onClick = {() => expandNote(note.noteId)}>
                        <h2>{note.title}</h2>
                        <p className="short-para">{limitWords(note.content)}</p>
                        <EditNote note={note}></EditNote>
                    </button>
                    <div className="content">
                        <p>Created on: {new Date(note.creationDate).toLocaleString()}</p>
                        <p>{note.content}</p>
                        <ul className="actionItem">
                            {note.actionItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <input type="checkbox" id={`${index}`} className="checkbox" />
                                    <label>{item}</label>
                                    <br />
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
    </>
        );
};

// Function to display '...' after 10 words of the note content in collapsed mode
function limitWords(content: string): string {
    
    const words: string[] = content.split(' ');
    if (words.length>10) {
        const shortCont: string = words.slice(0, 10).join(' ');
        return shortCont;
    }
    else
        return content;
}

export default MeetingNotes;