const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCounter = document.getElementById('taskCounter');

// 1. Task add karne ka function
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement('li');
    // Task text aur delete button add kar rahe hain
    li.innerHTML = `
        <span onclick="toggleTask(this)">${text}</span>
        <button onclick="deleteTask(this)" class="delete-btn">×</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = ""; 
    updateCounter();
}

// 2. Task ko complete/uncomplete karne ke liye
function toggleTask(element) {
    element.parentElement.classList.toggle('completed');
    updateCounter();
}

// 3. Single task delete karne ke liye
function deleteTask(element) {
    element.parentElement.remove();
    updateCounter();
}

// 4. FIX: Clear Completed button ka logic
function clearCompletedTasks() {
    // Sirf un 'li' elements ko select karega jin par 'completed' class hai
    const completedTasks = document.querySelectorAll('#taskList li.completed');
    
    if (completedTasks.length === 0) {
        alert("No completed tasks to clear!");
        return;
    }

    completedTasks.forEach(task => {
        task.remove();
    });
    
    updateCounter();
}

// 5. Counter update function
function updateCounter() {
    const total = taskList.children.length;
    const completed = document.querySelectorAll('#taskList li.completed').length;
    taskCounter.innerText = `${total} Task(s), ${completed} Completed`;
}

// Enter key support
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
