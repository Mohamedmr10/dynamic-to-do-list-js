// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create the list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove task when button clicked
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append button to the list item
        li.appendChild(removeBtn);

        // Add list item to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for pressing Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
