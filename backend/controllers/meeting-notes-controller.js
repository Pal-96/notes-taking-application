import * as meetingNotesService from './../services/meeting-note-services.js';
import {setResponse, setError} from './response-handlers.js';

export const searchNotes = async (request, response) => {
    try {
        const params = {...request.query};
        const meetingNotes = await meetingNotesService.search(params);
        setResponse(meetingNotes, response);

    } catch(error) {
        setError(error, response);

    }

}

export const findNotesByKeyword = async (request, response) => {
    try {
        const keyword = request.params.keyword;
        const meetingNotes = await meetingNotesService.findByKeyword(keyword);
        if (meetingNotes.length) {
            setResponse(meetingNotes, response);
        }
        else {
            setResponse({message: 'Note not found'}, response);
        }
        

    } catch(error) {
        setError(error, response);

    }

}

export const findNotesByDate = async (request, response) => {
    try {
        const startDate = request.params.startDate;
        const endDate = request.params.endDate;
        if (startDate>endDate) {
            setResponse({message: 'Start date should be less than or equal to end date'}, response)
        }
        else {
            const meetingNotes = await meetingNotesService.findByDate(startDate, endDate);
            if (meetingNotes.length) {
                setResponse(meetingNotes, response);
            }

            else {
                setResponse({message: 'Note not found'}, response);
            }
            
        } 

    } catch(error) {
        setError(error, response);

    }

}

export const createNote = async (request, response) => {
    try {
        const newNote = {...request.body};
        const meetingNote = await meetingNotesService.save(newNote);
        setResponse(meetingNote, response);

    } catch(error) {
        setError(error, response);

    }

}

export const updateNote = async (request, response) => {
    try {
        const meetingNote = await meetingNotesService.update(request);
        
        if (meetingNote) {
            setResponse(meetingNote, response);
        }

        else {
            setResponse({message: 'Note not found'}, response);
        }


    } catch(error) {
        
        setError(error, response);

    }
    
}

export const deleteNote = async (request, response) => {

    try {
        const meetingNote = await meetingNotesService.remove(request);

        if (meetingNote) {
            setResponse({message: 'Note deleted'}, response);
        }

        else {
            setResponse({message: 'Note not found'}, response);
        }

    } catch(error) {

        setError(error, response);   

    }
    
}