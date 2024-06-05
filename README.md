# Notes Taking Application

![Screenshot_5-6-2024_14384_localhost](https://github.com/Pal-96/care2share-finalproject/assets/144847202/120c5945-042a-42af-a690-8dcc573cfae6)

## Features:
1. The application creates and manages notes using JavaScript, SCSS, CSS and HTML.
2. Displays existing notes, read from a json file using XMLHttpRequest and supports creation of new notes as well.
3. The user can collapse or expand the note by clicking on it and create new note as per the requirements. 
4. Each note has a title, content, a list of action items and creation date & time.
5. The user can check the action items if completed or leave it unchecked if it is still open.

## Steps to set up .env
This project requires a .env file to store the server port no. and your MongoDB connection parameters. This file is ignored by Git to ensure your connection is private.
1. Create .env file in the root directory of the project.<br/>
<img width="895" alt="notes-taking" src="https://github.com/Pal-96/care2share-finalproject/assets/144847202/21708cb7-4f60-4c6b-9949-7a8d381c2eb2">
<br/>
2. Replace the placeholders with actual data.<br/>
3. Save the file.

## Instructions to execute the project:
1. Clone the repository on your local machine
2. Navigate to root directory of the project and add .env file for MongoDB connection (port: 3001)
3. Open terminal and change to project root directory
4. Execute the command: npm install
5. Execute the command to start backend server: node server.js (Note: Message 'Server is running on port 3001' must be printed on terminal)
6. Open new terminal and change to **meeting-notes-app** directory
7. Execute the command: npm install
8. Execute the command to start the front end server: npm run dev
9. Open the localhost link on the browser to view the application