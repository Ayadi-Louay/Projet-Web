// src/components/profile.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./about_us.css"; // conserve pour réutiliser les mêmes variables / styles globaux
import "./Profile.css";
import userPlaceholder from "../assets/user-placeholder.jpg";

function Profile() {
  const { user: authUser, logout } = useAuth();
  const navigate = useNavigate();
  
  // état local simple pour démonstration : mode édition / affichage
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "",
    role: "Transitex Client",
    email: "",
    phone: "",
    company: "",
    locale: "English",
  });

  useEffect(() => {
    if (authUser) {
      setUser({
        name: authUser.fullName || "",
        role: "Transitex Client",
        email: authUser.email || "",
        phone: "",
        company: "",
        locale: "English",
      });
    }
  }, [authUser]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <main className="profile-page">
      <section className="container profile-top">
        <div className="profile-card">
          <div className="profile-photo-wrap">
            <img
              src={userPlaceholder}
              alt={`${user.name}`}
              className="profile-photo"
            />
          </div>

          <div className="profile-meta">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-role">{user.role}</p>

            {!editing ? (
              <>
                <p className="profile-contact">{user.email} · {user.phone}</p>
                <p className="profile-company"><strong>Company:</strong> {user.company}</p>

                <div className="profile-actions">
                  <button className="btn primary" onClick={() => setEditing(true)}>Edit Profile</button>
                  <button className="btn" onClick={handleLogout}>Logout</button>
                </div>
              </>
            ) : (
              <div className="profile-edit-form">
                <label>
                  Name
                  <input name="name" value={user.name} onChange={handleChange} />
                </label>
                <label>
                  Role
                  <input name="role" value={user.role} onChange={handleChange} />
                </label>
                <label>
                  Email
                  <input name="email" value={user.email} onChange={handleChange} />
                </label>
                <label>
                  Phone
                  <input name="phone" value={user.phone} onChange={handleChange} />
                </label>

                <div className="profile-actions">
                  <button className="btn primary" onClick={() => setEditing(false)}>Save</button>
                  <button className="btn" onClick={() => setEditing(false)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container profile-body">
        <div className="profile-grid">
          <aside className="panel stats-panel">
            <h3 className="panel-title">My Statistics</h3>
            <ul className="stats-list">
              <li>
                <span className="stat-number">12</span>
                <span className="stat-label">Shipments in Progress</span>
              </li>
              <li>
                <span className="stat-number">48</span>
                <span className="stat-label">Completed Shipments</span>
              </li>
              <li>
                <span className="stat-number">3</span>
                <span className="stat-label">Notifications</span>
              </li>
            </ul>
          </aside>

          <main className="panel activity-panel">
            <h3 className="panel-title">Recent Activity</h3>
            <ul className="activity-list">
              <li>
                <div className="activity-left">
                  <strong>BL #TG12345</strong>
                  <div className="muted">In Transit · 2 days</div>
                </div>
                <div className="activity-right">View</div>
              </li>
              <li>
                <div className="activity-left">
                  <strong>Order #C4567</strong>
                  <div className="muted">Delivered · 5 days</div>
                </div>
                <div className="activity-right">Invoice</div>
              </li>
              <li>
                <div className="activity-left">
                  <strong>Customs Request</strong>
                  <div className="muted">Response Required</div>
                </div>
                <div className="activity-right">Respond</div>
              </li>
            </ul>
          </main>

          <aside className="panel settings-panel">
            <h3 className="panel-title">Settings</h3>
            <div className="setting-row">
              <label>Language</label>
              <select value={user.locale} onChange={(e) => setUser(prev => ({...prev, locale: e.target.value}))}>
                <option>Français</option>
                <option>English</option>
                <option>العربية</option>
              </select>
            </div>

            <div className="setting-row">
              <label>Email Notifications</label>
              <div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider" />
                </label>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <button className="btn">Delete Account</button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
export default Profile;
