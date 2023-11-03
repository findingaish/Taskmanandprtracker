// Sample data for the chart (tasks completed over time)
const taskCompletionData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels (e.g., months)
    datasets: [
        {
            label: 'Tasks Completed',
            data: [3, 6, 12, 8, 10], // Replace with your actual data
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 1,
        },
    ],
};

// Get the canvas element
const ctx = document.getElementById('task-completion-chart').getContext('2d');

// Create the chart
const taskCompletionChart = new Chart(ctx, {
    type: 'bar', // You can use 'line' for a line chart
    data: taskCompletionData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
