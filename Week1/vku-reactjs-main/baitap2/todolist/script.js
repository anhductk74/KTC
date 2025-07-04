// script.js

// Đồng hồ và lời chào
function updateClockAndGreeting() {
  const now = new Date();
  const clock = document.getElementById('clock');
  const greeting = document.getElementById('greeting');
  const hour = now.getHours().toString().padStart(2, '0');
  const min = now.getMinutes().toString().padStart(2, '0');
  const sec = now.getSeconds().toString().padStart(2, '0');
  clock.textContent = `${hour}:${min}:${sec}`;

  let msg = "Chào buổi sáng 🌅";
  if (now.getHours() >= 12 && now.getHours() < 18) msg = "Chào buổi chiều ☀️";
  else if (now.getHours() >= 18 || now.getHours() < 5) msg = "Chào buổi tối 🌙";
  greeting.textContent = msg;
}
setInterval(updateClockAndGreeting, 1000);
updateClockAndGreeting();

// Chủ đề sáng/tối
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggleBtn.innerHTML = document.body.classList.contains("dark-theme")
    ? '<i class="fa-solid fa-sun"></i> Chế độ sáng'
    : '<i class="fa-solid fa-moon"></i> Chế độ tối';
});

// Hiển thị modal ghi chú
const noteModal = new bootstrap.Modal(document.getElementById('noteModal'));
document.getElementById('addNoteBtn').addEventListener('click', () => {
  document.getElementById('noteText').value = '';
  noteModal.show();
});


const noteForm = document.getElementById('noteForm');
const noteContainer = document.getElementById('noteContainer');
const colors = ["#f39c12", "#e74c3c", "#9b59b6", "#2ecc71", "#3498db"];

noteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('noteText').value.trim();
  if (text === "") {
    document.getElementById('noteError').textContent = "Không được để trống!";
    return;
  }
  document.getElementById('noteError').textContent = "";

  const note = document.createElement('div');
  note.className = 'note';
  note.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  note.innerHTML = `
    ${text}
    <span class="delete-note"><i class="fa-solid fa-xmark"></i></span>
  `;
  noteContainer.appendChild(note);
  noteModal.hide();
});

// Xóa ghi chú
noteContainer.addEventListener('click', (e) => {
  if (e.target.closest('.delete-note')) {
    e.target.closest('.note').remove();
  }
});

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
  const value = todoInput.value.trim();
  if (value === "") {
    document.getElementById('todoError').textContent = "Không được để trống!";
    return;
  }
  document.getElementById('todoError').textContent = "";

  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';
  li.innerHTML = `
    <div>
      <input type="checkbox" class="form-check-input me-2"> ${value}
    </div>
    <button class="btn btn-sm btn-danger delete-task"><i class="fa-solid fa-trash"></i></button>
  `;
  todoList.appendChild(li);
  todoInput.value = "";
});

// Xóa và đánh dấu hoàn thành
todoList.addEventListener('click', (e) => {
  if (e.target.closest('.delete-task')) {
    e.target.closest('li').remove();
  }
});
