import React, { useState } from 'react';

function NotificationForm({ onSubmit }) {
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, message });
    setCategory('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Sports">Sports</option>
          <option value="Finance">Finance</option>
          <option value="Movies">Movies</option>
        </select>
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      <button type="submit">Send Notification</button>
    </form>
  );
}

export default NotificationForm;
