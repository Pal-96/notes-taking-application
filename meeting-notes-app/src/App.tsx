import Home from './pages/HomePage/Home.tsx';
import './App.css';
import './pages/MeetingNotes/MeetingNotes.css';
import MeetingNotesPage from './pages/MeetingNotes/MeetingNotes.tsx';

function App() {

  return (
    <>
    <Home></Home>
    <section>
      <MeetingNotesPage/>
    </section>
    </>
  )
}

export default App
