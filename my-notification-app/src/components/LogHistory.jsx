import React, { useState, useEffect } from 'react';

function LogHistory() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // BUENA PRACTICA: Aplicar bloque Async para manejo de errores
    const fetchLogs = async () => {
      try {
        const response = await fetch('/api/logs');
        if (!response.ok) {
          // BUENA PRACTICA: Manejo de mensajes durante el flujo
          throw new Error(`HTTP status ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError('Expected JSON response from the server');
        }
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false); // BUENA PRACTICA: manejo de loading y cerrarlo al final.
      }
    };

    fetchLogs();
  }, []); // BUENA PRACTICA: siempre usar el parametro de arreglo vacio

  // BUENA PRACTICA: manejo de mensaje de loading
  if (loading) {
    return <div>Loading logs...</div>;
  }

  if (error) {
    // BUENA PRACTICA: Manejo de errores para no detener el funcionamiento
    return <div>Error loading logs. Please try again later.</div>;
  }

  return (
    <ul>
      {logs.length > 0 ? (
        logs.map((log, index) => (
          <li key={index}>{log.message}</li> // BUENA PRACTICA: Manejo de indices en el mapeo
        ))
      ) : (
        <div>No logs found.</div> // BUENA PRACTICA: enviar un mensaje al usuario en caso de errores
      )}
    </ul>
  );
}

export default LogHistory;
