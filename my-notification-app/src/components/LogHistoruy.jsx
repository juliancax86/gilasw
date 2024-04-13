import React from 'react';

function LogHistory({ logs }) {
  return (
    <ul>
      {logs.map((log, index) => (
        <li key={index}>{`${log.timestamp} - ${log.category} - ${log.message}`}</li>
      ))}
    </ul>
  );
}

export default LogHistory;
