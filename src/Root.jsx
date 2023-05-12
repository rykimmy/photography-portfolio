import { Link, Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';

export const TaskContext = createContext();

export default function Root() {
  const [tasks, setTasks] = useState({});

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div>
        <header>
          <h1 id="title">Ryan Kim</h1>
          <nav>
            <p className="navbar"><Link className="navlink" to="/">Home</Link></p>
            <p className="navbar"><Link className="navlink" to="/photography">Photography</Link></p>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <a className="contact" href="mailto:rysjkim@gmail.com"><img className="contactimg" src="./email.png" /></a>
          <a className="contact" target="_blank" href="https://www.instagram.com/kimmmy_photography/"><img className="contactimg" src="instagram.png" /></a>
          <a className="contact" target="_blank" href="https://www.linkedin.com/in/ryan-kim-b013b81bb"><img className="contactimg" src="linkedin.png" /></a>
        </footer>
      </div>
    </TaskContext.Provider>
  );
}
