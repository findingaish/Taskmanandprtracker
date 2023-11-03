import React from 'react';
import TaskList from './TaskList'; // Import your TaskList component

function App() {
    return (
        <div className="App">
            <h1>Task Progress Tracker</h1>
            <TaskList /> {/* Use the TaskList component here */}
        </div>
    );
}

export default App;
