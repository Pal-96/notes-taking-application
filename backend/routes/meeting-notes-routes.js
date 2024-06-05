import express from "express";
import * as meetingNotesController from './../controllers/meeting-notes-controller.js';

const router = express.Router();
router.route('/')
    .get(meetingNotesController.searchNotes)
    .post(meetingNotesController.createNote);

router.route('/:keyword')
    .get(meetingNotesController.findNotesByKeyword);

router.route('/:startDate/:endDate')
    .get(meetingNotesController.findNotesByDate);

router.route('/:noteId')
    .put(meetingNotesController.updateNote)
    .delete(meetingNotesController.deleteNote);

export default router;