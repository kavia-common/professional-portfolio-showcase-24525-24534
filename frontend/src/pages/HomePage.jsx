import React from "react";
import { Link } from "react-router-dom";
import { screens } from "../data/screens";

/**
 * PUBLIC_INTERFACE
 * HomePage
 * Lists all available screens with routes and source info.
 */
function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Screens Index</h1>
        <p>Browse the available demo screens converted from static assets.</p>
      </section>
      <section className="grid">
        {screens.map((s) => (
          <article className="card" key={s.route}>
            <h2>{s.title}</h2>
            <p>
              Route: <code>{s.route}</code>
            </p>
            <p>
              Source: <code>{s.source}</code>
            </p>
            <Link className="btn" to={s.route}>
              Open
            </Link>
          </article>
        ))}
      </section>
      <style>{`
        .home-page {
          max-width: 1100px;
          margin: 24px auto;
          padding: 0 16px 48px;
        }
        .hero h1 { margin: 0 0 8px; }
        .hero p { color: #374151; margin: 0 0 20px; }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
        }
        .card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .btn {
          display: inline-block;
          margin-top: 8px;
          background: #2563EB;
          color: #fff;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          transition: opacity .2s;
        }
        .btn:hover { opacity: .9; }
        code {
          background: #f3f4f6;
          padding: 2px 6px;
          border-radius: 6px;
        }
      `}</style>
    </main>
  );
}

export default HomePage;
