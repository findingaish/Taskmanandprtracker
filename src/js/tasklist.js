import React, { useEffect, useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from the server using the fetch API
        fetch('/api/tasks')
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    return (
        <table>
            {/* Render tasks here using the tasks state */}
        </table>
    );
}

export default TaskList;
