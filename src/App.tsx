import "./App.css";
import { ContactForm } from "./ContactForm";
import { ServicesGallery } from "./ServicesGallery";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import { useState, useEffect } from "react";

function App() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLangSwitch = () => {
    i18n.changeLanguage(i18n.language === "en" ? "hu" : "en");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key press and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-brand">
            <h1>Kitti's Gallery</h1>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Mobile menu backdrop */}
          {isMobileMenuOpen && (
            <div
              className="mobile-menu-backdrop"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
          )}

          <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <a href="#home" onClick={closeMobileMenu}>
                  {t("navbar.home")}
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMobileMenu}>
                  {t("navbar.about")}
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMobileMenu}>
                  {t("navbar.goals")}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMobileMenu}>
                  {t("navbar.contact")}
                </a>
              </li>
            </ul>

            <div className="nav-actions">
              <IconButton
                color="primary"
                onClick={handleLangSwitch}
                aria-label="switch language"
                className="lang-button"
              >
                <LanguageIcon />
                <span style={{ marginLeft: 4, fontSize: 14 }}>
                  {i18n.language === "en" ? "HU" : "EN"}
                </span>
              </IconButton>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2>{t("hero.title")}</h2>
              <p>{t("hero.desc")}</p>
              <div className="hero-buttons">
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t("hero.doc")}
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="code-preview">
                <div className="code-header">
                  <div className="code-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>App.tsx</span>
                </div>
                <div className="code-content">
                  <pre>{`function App() {
  return (
    <div className="app">
      <h1>Hello React!</h1>
      <p>TypeScript + Vite</p>
    </div>
  )
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="two-column">
          <div className="content-wrapper">
            <div className="column-left">
              <h2>{t("about.title")}</h2>
              <p>{t("about.desc")}</p>
              <article>
                <h3>{t("about.built")}</h3>
                <ul>
                  <li>{t("about.gallery")}</li>
                  <li>{t("about.form")}</li>
                  <li>{t("about.mobile")}</li>
                  <li>{t("about.personal")}</li>
                  <li>{t("about.infinite")}</li>
                </ul>
              </article>
            </div>
            <div className="column-right">
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>{t("stats.personal")}</h4>
                  <p>{t("stats.personalDesc")}</p>
                </div>
                <div className="stat-card">
                  <h4>{t("stats.interactive")}</h4>
                  <p>{t("stats.interactiveDesc")}</p>
                </div>
                <div className="stat-card">
                  <h4>{t("stats.functional")}</h4>
                  <p>{t("stats.functionalDesc")}</p>
                </div>
                <div className="stat-card">
                  <h4>{t("stats.creative")}</h4>
                  <p>{t("stats.creativeDesc")}</p>
                </div>
                <div className="stat-card">
                  <h4>{t("stats.free")}</h4>
                  <p>{t("stats.freeDesc")}</p>
                </div>
                <div className="stat-card">
                  <h4>{t("stats.responsive")}</h4>
                  <p>{t("stats.responsiveDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesGallery />

        <section id="contact" className="contact-section">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.desc")}</p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>{t("contact.email")}:</strong> annus.kitti@gmail.com
                </div>
                <div className="contact-item">
                  <strong>{t("contact.willRead")}</strong>{" "}
                  {t("contact.willReadVal")}
                </div>
                <div className="contact-item">
                  <strong>{t("contact.location")}:</strong>{" "}
                  {t("contact.locationVal")}
                </div>
              </div>
              <div className="author-note">
                <p>
                  <em>{t("contact.attach")}</em>
                </p>
                <p>
                  <em>{t("contact.memes")}</em>
                </p>
              </div>
            </div>
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kitti's Gallery</h3>
            <p>
              Building the future with React, TypeScript, and modern web
              technologies.
            </p>
          </div>
          <div className="footer-section">
            <h4>{t("footer.quick")}</h4>
            <ul>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Docs
                </a>
              </li>
              <li>
                <a
                  href="https://vitejs.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vite Docs
                </a>
              </li>
              <li>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TypeScript
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t("footer.connect")}</h4>
            <div className="social-links">
              <a
                href="https://github.com/Kitti0403"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.github")}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </>
  );
}

export default App;
