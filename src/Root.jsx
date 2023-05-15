import { Link, Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import email from './img/icons/email.png';
import instagram from './img/icons/instagram.png';
import linkedin from './img/icons/linkedin.png';
import "animate.css/animate.min.css";

export const TaskContext = createContext();

export default function Root() {
  const [tasks, setTasks] = useState({});

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div>
        <header>
          <h1 id="title">Ryan Kim</h1>
          <nav>
            <p className="navBar"><Link className="navLink" to="/">Home</Link></p>
            <p className="navBar"><Link className="navLink" to="/photography">Photography</Link></p>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <a className="contact" href="mailto:rysjkim@gmail.com"><img className="contactImg" src={email} /></a>
          <a className="contact" target="_blank" href="https://www.instagram.com/kimmmy_photography/"><img className="contactImg" src={instagram} /></a>
          <a className="contact" target="_blank" href="https://www.linkedin.com/in/ryan-kim-b013b81bb"><img className="contactImg" src={linkedin} /></a>
        </footer>
      </div>
    </TaskContext.Provider>
  );
};
