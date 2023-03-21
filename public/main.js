document.getElementById('add_task').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const d = [...data.entries()];
  fetch('/tasks', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ task: d[0][1] }),
  });
  location.reload();
});
