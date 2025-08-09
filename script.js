// script.js with Local Storage support
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (!addButton || !taskInput || !taskList) {
        console.error("One or more required DOM elements are missing.");
        return;
    }

    // Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false);
        });
    }

    // Create a task element and optionally save to localStorage
    function createTaskElement(text, save = true) {
        const li = document.createElement('li');
        const textNode = document.createTextNode(text);
        li.appendChild(textNode);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function () {
            li.remove();
            removeTaskFromStorage(text);
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            saveTaskToStorage(text);
        }
    }

    // Save a single task to localStorage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove a single task from localStorage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Add a new task from the input field
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        createTaskElement(taskText, true);
        taskInput.value = '';
        taskInput.focus();
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });

    // Initial load
    loadTasks();
});
