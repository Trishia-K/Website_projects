const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');   

const themeToggle = document.getElementById('theme-toggle');

// Add task functionality
addTaskButton.addEventListener('click', () => {
  if (taskInput.value.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.textContent = taskInput.value;

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('text-red-500',   
 'hover:text-red-700');
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value   
 = '';
  }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});