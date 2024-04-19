import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import NotificationForm from './components/NotificationForm';
import LogHistory from './components/LogHistory';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />  {/* NavBar siempre se renderizará */}
      <div className="content">  {/* Un div para el contenido principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notify" element={<NotificationForm />} />
          <Route path="/logs" element={<LogHistory />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Notification System</h1>;
}

export default App;
