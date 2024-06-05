import CreateNote from '../../components/create-notes-component';
export function Home() {
    return (
        <div className="menu">
            <h1>Personal Reminder</h1>
            <CreateNote></CreateNote>
        </div>

    )
}

export default Home;