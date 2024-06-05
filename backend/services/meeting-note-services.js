import { query } from 'express';
import MeetingNote from './../models/meeting-notes.js';

/**
* Retrives the current date while creating a note
* @returns
*/
function getCurrentDate() {
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const hours = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    return `${month}-${day}-${year}  ${hours}:${min}:${sec} `;
}

/**
* Retrieves all the existing meeting notes
*
* @param {*} params  - parameter is not required to retrieve all the notes
* @returns
*/
export const search = async (params = {}) => {
    const meetingNotes = await MeetingNote.find(params).exec(); 
    return meetingNotes;
}

/**
* Retrieves existing meeting notes whose title, content or actionItems matches the keyword
*
* @param {*} keyword
* @returns
*/
export const findByKeyword = async (keyword) => {
    const meetingNotes = await MeetingNote.find({
        $or: [
            { title: { $regex: keyword, $options: 'i' } }, // Case-insensitive search in title
            { content: { $regex: keyword, $options: 'i' } }, // Case-insensitive search in content
            { actionItems: { $regex: keyword, $options: 'i' } }// Case-insensitive search in actionItems
        ]
    }).exec();
    return meetingNotes;
}

/**
* Retrieves existing meeting notes whose creation date falls between the date range
*
* @param {Date} startDate
* @param {Date} endDate
* @returns
*/
export const findByDate = async (startDate, endDate) => {
    const meetingNote = await MeetingNote.find({creationDate: {$lte: endDate, $gte: startDate}}).exec();
    return meetingNote;
}

/**
* Creates a new note
*
* @param {*} newNote
* @returns
*/
export const save = async (newNote) => {
    const notes = await (MeetingNote.find().exec());
    let maxNoteId = 0;
    notes.forEach(note => {
        if (note.noteId > maxNoteId) {
            maxNoteId = note.noteId;
        }
    })
    newNote.creationDate = getCurrentDate();
    newNote.noteId = maxNoteId + 1
    const meetingNote = new MeetingNote(newNote);
    return await meetingNote.save();
}

/**
* Updates a note by Id
*
* @param {*} request
* @returns
*/
export const update = async (request) => {
    const meetingNote = await MeetingNote.findOneAndUpdate({ noteId: request.params.noteId }, request.body, {new: true}).exec();
    if (meetingNote) {
        await meetingNote.save();
    }
    return meetingNote;
}

/**
* Deletes a note by Id
*
* @param {*} request
* @returns
*/
export const remove = async (request) => {
    return await MeetingNote.findOneAndDelete({ noteId: request.params.noteId }).exec();
        
}