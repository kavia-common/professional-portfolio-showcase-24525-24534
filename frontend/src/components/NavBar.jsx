import React from "react";
import { NavLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * NavBar
 * Global top navigation for the app.
 * Links to all available screens with simple Ocean Professional styling.
 */
const NavBar = () => {
  return (
    <nav className="navbar" aria-label="Primary">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          Portfolio Demo
        </NavLink>
        <div className="links">
          <NavLink to="/take-this-jobs" className="link">
            Take This Jobs
          </NavLink>
          <NavLink to="/jobs-detail-open" className="link">
            Jobs Detail
          </NavLink>
          <NavLink to="/profile" className="link">
            Profile
          </NavLink>
          <NavLink to="/download-here" className="link">
            Download Here
          </NavLink>
        </div>
      </div>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-weight: 700;
          color: #2563EB;
          text-decoration: none;
        }
        .links {
          display: flex;
          gap: 12px;
        }
        .link {
          color: #111827;
          text-decoration: none;
          padding: 8px 10px;
          border-radius: 8px;
          transition: background .2s, color .2s;
        }
        .link:hover {
          background: rgba(37,99,235,0.08);
          color: #2563EB;
        }
        .link.active {
          background: rgba(37,99,235,0.12);
          color: #2563EB;
          font-weight: 600;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
