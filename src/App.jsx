import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">C</div>

          <div>
            <strong>ComponentKit</strong>
            <span>UI Library</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#overview" className="active">
            Overview
          </a>
          <a href="#buttons">Buttons</a>
          <a href="#cards">Cards</a>
          <a href="#modals">Modals</a>
          <a href="#usage">Usage</a>
        </nav>

        <div className="sidebar-footer">
          <span className="status-dot"></span>
          Ready for development
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <span className="eyebrow">COMPONENT LIBRARY</span>

            <h1>Build consistent interfaces.</h1>

            <p>
              A small collection of reusable React components designed
              for clean, scalable interfaces.
            </p>
          </div>

          <div className="version-badge">
            <span>●</span> v1.0.0
          </div>
        </header>

        {/* HERO */}
        <section id="overview" className="hero-section">
          <div className="hero-card">
            <div className="hero-content">
              <span className="tag">REUSABLE UI</span>

              <h2>
                Simple components.
                <br />
                <span>Consistent results.</span>
              </h2>

              <p>
                Explore buttons, cards and modals built as reusable
                React components with flexible props and responsive
                styling.
              </p>

              <div className="hero-actions">
                <Button onClick={() => setModalOpen(true)}>
                  Open modal
                </Button>

                <a href="#buttons" className="text-link">
                  Explore components →
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-window">
                <div className="window-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-lines">
                  <div className="code-line long"></div>
                  <div className="code-line medium"></div>
                  <div className="code-line short"></div>
                  <div className="code-line long"></div>
                  <div className="code-line tiny"></div>
                  <div className="code-line medium"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUTTONS */}
        <section id="buttons" className="component-section">
          <div className="section-heading">
            <div>
              <span className="section-number">01</span>
              <h2>Button</h2>
            </div>

            <p>
              Flexible actions with multiple visual variants and sizes.
            </p>
          </div>

          <div className="showcase">
            <div className="preview-area">
              <div className="button-row">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Delete</Button>
              </div>

              <div className="button-row">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            <div className="code-preview">
              <span>Example</span>

              <pre>{`<Button variant="primary">
  Get Started
</Button>`}</pre>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section id="cards" className="component-section">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <h2>Card</h2>
            </div>

            <p>
              Structured content containers for features, products and
              information.
            </p>
          </div>

          <div className="card-grid">
            <Card
              icon="✦"
              title="Reusable"
              description="Build once and reuse across different screens and features."
              action={
                <Button variant="outline" size="small">
                  Learn more
                </Button>
              }
            />

            <Card
              icon="◈"
              title="Flexible"
              description="Use props to customize content without changing the component."
              action={
                <Button variant="outline" size="small">
                  View API
                </Button>
              }
            />

            <Card
              icon="◎"
              title="Consistent"
              description="Shared styles help maintain a predictable visual language."
              action={
                <Button variant="outline" size="small">
                  Explore
                </Button>
              }
            />
          </div>
        </section>

        {/* MODAL */}
        <section id="modals" className="component-section">
          <div className="section-heading">
            <div>
              <span className="section-number">03</span>
              <h2>Modal</h2>
            </div>

            <p>
              Focused dialogs for confirmations, forms and important
              interactions.
            </p>
          </div>

          <div className="modal-demo">
            <div>
              <span className="tag">INTERACTION</span>

              <h3>Preview the modal component</h3>

              <p>
                Click the button to open a reusable modal with overlay,
                keyboard support and footer actions.
              </p>
            </div>

            <Button onClick={() => setModalOpen(true)}>
              Launch modal
            </Button>
          </div>
        </section>

        {/* USAGE */}
        <section id="usage" className="component-section usage-section">
          <div className="section-heading">
            <div>
              <span className="section-number">04</span>
              <h2>Usage</h2>
            </div>

            <p>
              Components are imported and configured using simple props.
            </p>
          </div>

          <div className="usage-grid">
            <div className="usage-card">
              <span>Button.jsx</span>

              <pre>{`import Button from "./components/Button";

<Button variant="primary">
  Continue
</Button>`}</pre>
            </div>

            <div className="usage-card">
              <span>Card.jsx</span>

              <pre>{`import Card from "./components/Card";

<Card
  title="Dashboard"
  description="View your analytics"
/>`}</pre>
            </div>

            <div className="usage-card">
              <span>Modal.jsx</span>

              <pre>{`<Modal
  isOpen={isOpen}
  title="Confirm"
  onClose={closeModal}
>
  Are you sure?
</Modal>`}</pre>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>
            <strong>ComponentKit</strong>
            <span>Reusable React UI components.</span>
          </div>

          <span>Built with React + Vite</span>
        </footer>
      </main>

      {/* MODAL INSTANCE */}
      <Modal
        isOpen={modalOpen}
        title="Welcome to ComponentKit"
        onClose={() => setModalOpen(false)}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>

            <Button onClick={() => setModalOpen(false)}>
              Continue
            </Button>
          </>
        }
      >
        <p>
          This modal is a reusable component. Its content, title and
          footer can be changed through React props.
        </p>

        <div className="modal-info">
          <div>
            <strong>ESC</strong>
            <span>Close with keyboard</span>
          </div>

          <div>
            <strong>×</strong>
            <span>Close with the button</span>
          </div>

          <div>
            <strong>↗</strong>
            <span>Reusable anywhere</span>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;