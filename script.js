const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

function updateCount() {
  const countEl = document.querySelector('.footer .meta');
  const items = list.querySelectorAll('.todo-item').length;
  countEl.textContent = `${items} item${items !== 1 ? 's' : ''}`;
}

function createItem(text) {
  const item = document.createElement('div');
  item.className = 'todo-item';

  const check = document.createElement('button');
  check.className = 'check';
  check.textContent = '✓';
  check.addEventListener('click', () => {
    textEl.classList.toggle('done');
  });

  const textEl = document.createElement('div');
  textEl.className = 'todo-text';
  textEl.textContent = text;

  const del = document.createElement('button');
  del.className = 'btn-primary';
  del.style.background = 'transparent';
  del.style.color = 'var(--muted)';
  del.style.border = 'none';
  del.textContent = 'Delete';
  del.addEventListener('click', () => { item.remove(); updateCount(); });

  item.appendChild(check);
  item.appendChild(textEl);
  item.appendChild(del);
  return item;
}

addBtn.addEventListener('click', () => {
  const val = input.value.trim();
  if (!val) return;
  const item = createItem(val);
  list.appendChild(item);
  input.value = '';
  updateCount();
});

input.addEventListener('keydown', (e) => { if (e.key === 'Enter') addBtn.click(); });

// initial count
updateCount();
