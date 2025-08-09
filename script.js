// script.js
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (!addButton || !taskInput || !taskList) {
        console.error("One or more required DOM elements are missing.");
        return;
    }

    function createTaskElement(text) {
        const li = document.createElement('li');
        const textNode = document.createTextNode(text);
        li.appendChild(textNode);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(removeBtn);
        return li;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        const li = createTaskElement(taskText);
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
});
