const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'your_mysql_host',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'task_manager',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.message);
    } else {
        console.log('Connected to the database');
    }
});

// Execute an SQL query
db.query('SELECT * FROM your_table_name', (err, results, fields) => {
    if (err) {
        console.error('Error executing SQL query: ' + err.message);
        return;
    }

    // Process the query results (results is an array of rows)
    console.log('Query results:', results);
});

// Close the database connection when done
db.end();

// Serve static files (your HTML and any assets)
app.use(express.static('public'));

// Create Task endpoint
app.post('/api/tasks', (req, res) => {
    const { title, description, priority, dueDate } = req.body;

    if (!title || !priority || !dueDate) {
        return res.status(400).json({ error: 'Title, Priority, and Due Date are required.' });
    }

    const newTask = {
        title,
        description: description || '',
        priority,
        dueDate,
        status: 'To-Do', // Initial status is set to "To-Do"
    };

    db.query('INSERT INTO tasks SET ?', newTask, (err, result) => {
        if (err) {
            console.error('Error creating task: ' + err.message);
            return res.status(500).json({ error: 'Task creation failed.' });
        }
        newTask.id = result.insertId;
        res.status(201).json(newTask);
    });
});

// Get All Tasks endpoint
app.get('/api/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) {
            console.error('Error getting tasks: ' + err.message);
            return res.status(500).json({ error: 'Task retrieval failed.' });
        }
        res.json(results);
    });
});

// Get Task by ID endpoint
app.get('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
});

// Update Task Status endpoint
app.patch('/api/tasks/:id/status', (req, res) => {
    const taskId = req.params.id;
    const newStatus = req.body.status;

    const taskIndex = tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const task = tasks[taskIndex];
    task.status = newStatus;
    res.json(task);
});

// Serve the "progresstracker.html" file
app.get('/progress.html', (req, res) => {
    res.sendFile(__dirname + '/path_to_progress.html'); // Replace with the correct path to your HTML file
});

app.listen(port, () => {
    console.log(`API server is running on port ${port}`);
});
