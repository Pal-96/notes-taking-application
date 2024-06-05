import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    noteId: {
        type: Number
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    actionItems: [{type: String}],
    creationDate: {
        type: Date      
    }
});

const model = mongoose.model('meetingNote', Schema);

export default model;