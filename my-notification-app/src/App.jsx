import React, { useState, useEffect } from 'react';
import NotificationForm from './components/NotificationForm';
import LogHistory from './components/LogHistory';

function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notifications')
      .then(response => response.json())
      .then(data => setLogs(data));
  }, []);

  const handleFormSubmit = (data) => {
    fetch('http://localhost:3001/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      setLogs([data, ...logs]);
    });
  };

  return (
    <div>
      <NotificationForm onSubmit={handleFormSubmit} />
      <LogHistory logs={logs} />
    </div>
  );
}

export default App;
