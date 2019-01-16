import fetch from 'dva/fetch';

export async function getAll() {
  const response = await fetch('http://localhost:3000/api/tasks/', { method: 'GET' });
  return await response.json();
}

export async function addTask(data) {
  const response = await fetch('http://localhost:3000/api/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

export async function deleteTask(id) {
  const response = await fetch('http://localhost:3000/api/tasks/' + id + '/', {
    method: 'DELETE',
  });
  return response;
}

export async function checkTask(id) {
  const tmp = await fetch('http://localhost:3000/api/tasks/' + id + '/', { method: 'GET' });
  const jsondata = await tmp.json();
  jsondata.completed = true;
  const response = await fetch('http://localhost:3000/api/tasks/' + id + '/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsondata),
  });
  return response;
}

export async function closeTask(id) {
  const tmp = await fetch('http://localhost:3000/api/tasks/' + id + '/', { method: 'GET' });
  const jsondata = await tmp.json();
  jsondata.completed = false;
  const response = await fetch('http://localhost:3000/api/tasks/' + id + '/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsondata),
  });
  return response;
}
