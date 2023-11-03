
        // Function to create the task priority pie chart
        function createTaskPriorityChart() {
            const priorityData = {
                labels: ['Low', 'Medium', 'High'], // Priority levels
                datasets: [
                    {
                        label: 'Priority Distribution',
                        data: [5, 8, 4], // Replace with your actual data
                        backgroundColor: ['rgba(146, 226, 85, 0.8)', 'rgba(16, 156, 195, 0.8)', 'rgba(230, 95, 50, 0.8)'], // Colors
                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'], // Border colors
                        borderWidth: 1,
                    },
                ],
            };
            const ctx = document.getElementById('task-priority-chart').getContext('2d');

            const taskPriorityChart = new Chart(ctx, {
                type: 'pie',
                data: priorityData,
            });
        }