// src/components/profile.jsx
import React, { useState } from "react";
import "./about_us.css"; // conserve pour réutiliser les mêmes variables / styles globaux
import "./Profile.css";
import userPlaceholder from "../assets/user-placeholder.jpg";

function Profile() {
  // état local simple pour démonstration : mode édition / affichage
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Louay Ayadi",
    role: "Propriétaire PME",
    email: "louay@example.com",
    phone: "+216 23 456 789",
    company: "Transitex",
    locale: "Français",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

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
                <p className="profile-company"><strong>Entreprise :</strong> {user.company}</p>

                <div className="profile-actions">
                  <button className="btn primary" onClick={() => setEditing(true)}>Modifier le profil</button>
                  <button className="btn" onClick={() => alert("Déconnexion (exemple)")}>Se déconnecter</button>
                </div>
              </>
            ) : (
              <div className="profile-edit-form">
                <label>
                  Nom
                  <input name="name" value={user.name} onChange={handleChange} />
                </label>
                <label>
                  Rôle
                  <input name="role" value={user.role} onChange={handleChange} />
                </label>
                <label>
                  Email
                  <input name="email" value={user.email} onChange={handleChange} />
                </label>
                <label>
                  Téléphone
                  <input name="phone" value={user.phone} onChange={handleChange} />
                </label>

                <div className="profile-actions">
                  <button className="btn primary" onClick={() => setEditing(false)}>Enregistrer</button>
                  <button className="btn" onClick={() => setEditing(false)}>Annuler</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="container profile-body">
        <div className="profile-grid">
          <aside className="panel stats-panel">
            <h3 className="panel-title">Mes statistiques</h3>
            <ul className="stats-list">
              <li>
                <span className="stat-number">12</span>
                <span className="stat-label">Expéditions en cours</span>
              </li>
              <li>
                <span className="stat-number">48</span>
                <span className="stat-label">Expéditions terminées</span>
              </li>
              <li>
                <span className="stat-number">3</span>
                <span className="stat-label">Notifications</span>
              </li>
            </ul>
          </aside>

          <main className="panel activity-panel">
            <h3 className="panel-title">Activité récente</h3>
            <ul className="activity-list">
              <li>
                <div className="activity-left">
                  <strong>BL #TG12345</strong>
                  <div className="muted">En transit · 2 jours</div>
                </div>
                <div className="activity-right">Voir</div>
              </li>
              <li>
                <div className="activity-left">
                  <strong>Commande #C4567</strong>
                  <div className="muted">Livrée · 5 jours</div>
                </div>
                <div className="activity-right">Facture</div>
              </li>
              <li>
                <div className="activity-left">
                  <strong>Demande Douane</strong>
                  <div className="muted">Réponse requise</div>
                </div>
                <div className="activity-right">Répondre</div>
              </li>
            </ul>
          </main>

          <aside className="panel settings-panel">
            <h3 className="panel-title">Paramètres</h3>
            <div className="setting-row">
              <label>Langue</label>
              <select value={user.locale} onChange={(e) => setUser(prev => ({...prev, locale: e.target.value}))}>
                <option>Français</option>
                <option>English</option>
                <option>العربية</option>
              </select>
            </div>

            <div className="setting-row">
              <label>Notifications par e-mail</label>
              <div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider" />
                </label>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <button className="btn">Supprimer le compte</button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
export default Profile;
