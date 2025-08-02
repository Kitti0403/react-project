import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <h1>My React App</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Welcome to Modern React Development</h2>
              <p>Build fast, scalable applications with React 18, TypeScript, and Vite. Experience the power of modern web development with cutting-edge tools and best practices.</p>
              <div className="hero-buttons">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
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
              <h2>About This Project</h2>
              <p>This application demonstrates a modern React setup with TypeScript and Vite, optimized for 16:9 widescreen displays. It showcases semantic HTML5 structure and responsive design principles.</p>
              <article>
                <h3>Key Features</h3>
                <ul>
                  <li>⚡ Lightning-fast Vite development server</li>
                  <li>🔷 TypeScript for type safety</li>
                  <li>📱 Responsive 16:9 optimized layout</li>
                  <li>🎨 Modern CSS with semantic HTML5</li>
                  <li>🚀 Hot Module Replacement (HMR)</li>
                  <li>📦 Optimized production builds</li>
                </ul>
              </article>
            </div>
            <div className="column-right">
              <div className="stats-grid">
                <div className="stat-card">
                  <h4>Fast</h4>
                  <p>Sub-second HMR updates</p>
                </div>
                <div className="stat-card">
                  <h4>Modern</h4>
                  <p>Latest React 18 features</p>
                </div>
                <div className="stat-card">
                  <h4>TypeSafe</h4>
                  <p>Full TypeScript support</p>
                </div>
                <div className="stat-card">
                  <h4>Optimized</h4>
                  <p>Production-ready builds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-grid">
          <h2>What We Offer</h2>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Development</h3>
              <p>Full-stack React applications with modern tooling and best practices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Design</h3>
              <p>Responsive UI/UX design optimized for all screen sizes and devices.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Performance</h3>
              <p>Optimized applications with fast loading times and smooth interactions.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔒</div>
              <h3>Security</h3>
              <p>Secure applications with TypeScript safety and modern security practices.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Ready to start your next React project? Let's discuss how we can help you build something amazing.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong> hello@reactapp.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> San Francisco, CA
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>My React App</h3>
            <p>Building the future with React, TypeScript, and modern web technologies.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a></li>
              <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite Docs</a></li>
              <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 My React App. Built with React + TypeScript + Vite.</p>
        </div>
      </footer>
    </>
  )
}

export default App
