const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('tasks');

btn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;
  const li = document.createElement('li');
  li.textContent = text;
  const doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.style.marginLeft = '10px';
  doneBtn.addEventListener('click', () => li.style.textDecoration = 'line-through');
  li.appendChild(doneBtn);
  list.appendChild(li);
  input.value = '';
});
