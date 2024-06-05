export interface MeetingNote {
    noteId: number, 
    title: string,
    content: string,
    actionItems: string[],
    creationDate: Date
}

export const meetingnotes: Array<MeetingNote> = [];