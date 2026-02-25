import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../pages/my_profile/My_profile.css';
import { userData, projectsData } from '../../data/ZUBAYIR/my_profile/My_profile.js';

const ProfilePage = ({ user, projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) return <div className="loading">Yuklanmoqda...</div>;

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <div className="profile-header">
          <img src="https://via.placeholder.com/80" alt="Avatar" className="avatar" />
          <h2>{user.name}</h2>
          <p>{user.position}</p>
        </div>

        <div className="info-section">
          <label>Position</label>
          <input type="text" defaultValue={user.position} readOnly />
          <label>Company</label>
          <input type="text" defaultValue={user.company} readOnly />
          <label>Location</label>
          <input type="text" defaultValue={user.location} readOnly />
        </div>

        <div className="contact-section">
          <h3>Contact Info</h3>
          <input type="email" defaultValue={user.email} />
          <input type="text" defaultValue={user.phone} />
        </div>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <div className="tabs">
            <button className="active">Projects</button>
            <button>Team</button>
            <button>My vacations</button>
          </div>
          <button className="settings-btn" onClick={() => setIsModalOpen(true)}>
            ⚙️
          </button>
        </header>

        <div className="project-list">
          {projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-info">
                <div className="project-icon" style={{backgroundColor: proj.color}}></div>
                <div>
                  <span>{proj.id}</span>
                  <h4>{proj.title}</h4>
                  <small>Created {proj.created} • <strong>{proj.priority}</strong></small>
                </div>
              </div>
              <div className="project-stats">
                <div><span>All tasks</span> <p>{proj.allTasks}</p></div>
                <div><span>Active tasks</span> <p>{proj.activeTasks}</p></div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Notifications</h3>
            <div className="setting-item">
              <div>
                <strong>Issue Activity</strong>
                <p>Send me email notifications for issue activity</p>
              </div>
              <input type="checkbox" className="toggle" defaultChecked />
            </div>
            <div className="setting-item">
              <div>
                <strong>Tracking Activity</strong>
                <p>Send me notifications when someone's tracked time</p>
              </div>
              <input type="checkbox" className="toggle" />
            </div>
            <label className="checkbox-container">
              <input type="checkbox" /> Don't send me notifications after 9:00 PM
            </label>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const MyProfileApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage user={userData} projects={projectsData} />} />
      </Routes>
    </Router>
  );
};

export default MyProfileApp;