import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <h2 className="hero-subtitle">⚡ Welcome to</h2>
          <h1 className="hero-title">My React Project</h1>
          <p className="hero-text">
            Build modern web applications with React and Vite.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>Frontend</span>
          </div>
        </div>

        <div>
          <h1>Counter Demo</h1>
          <p>
            Click the button below to increase the counter value.
          </p>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>🚀 Features</h2>
          <p>Start building your application with these technologies.</p>

          <ul>
            <li>⚛️ React Components</li>
            <li>⚡ Fast Refresh</li>
            <li>📦 Vite Bundler</li>
            <li>🎨 Modern UI Development</li>
          </ul>
        </div>

        <div id="social">
          <h2>💡 Why React?</h2>
          <p>Create scalable and interactive user interfaces.</p>

          <ul>
            <li>Reusable Components</li>
            <li>State Management</li>
            <li>Fast Development</li>
            <li>Large Ecosystem</li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  );
}

export default App;