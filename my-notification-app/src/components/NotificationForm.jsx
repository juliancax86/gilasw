import React, { useState } from 'react';

function NotificationForm() {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category, message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      }

      const data = await response.json();
      console.log('Notification sent:', data);
      // Debug
      setCategory('');
      setMessage('');
    } catch (error) {
      console.error('There was an error sending the notification:', error);
      // BUENA PRACTICA: Manjeo de errores y mensajes.
      setSubmitError('Failed to send notification. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={isSubmitting}
          required
        >
          <option value="">Select a category</option>
          <option value="Sports">Sports</option>
          <option value="Finance">Finance</option>
          <option value="Movies">Movies</option>
        </select>
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={isSubmitting}
        ></textarea>
      </div>
      {/* BUENA PRACTTICA: Mostrar mensaje al usuario mientras se espera respuesta */}
      {submitError && <div className="error" style={{color: 'red'}}>Error: {submitError}</div>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Notification'}
      </button>
    </form>
  );
}

export default NotificationForm;
