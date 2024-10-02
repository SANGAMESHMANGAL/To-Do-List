let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');

    const taskText = taskInput.value.trim();
    const taskDateTime = taskDate.value;

    if (taskText === '' || taskDateTime === '') {
        alert('Please enter a task and set a date and time.');
        return;
    }

    const task = {
        text: taskText,
        dateTime: taskDateTime,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';
    taskDate.value = '';

    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = `${task.text} (Due: ${new Date(task.dateTime).toLocaleString()})`;
        if (task.completed) {
            taskText.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.onclick = () => toggleCompleteTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        taskItem.appendChild(taskText);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    });
}

function toggleCompleteTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
