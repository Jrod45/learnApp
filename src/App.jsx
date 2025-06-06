import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Learn from './components/Learn';
import Practice from './components/Practice';
import Games from './components/Games';
import Progress from './components/Progress';
import Home from './components/Home';

function App() {
  const [activeSection, setActiveSection] = useState('learn');

  const renderContent = () => {
    switch (activeSection) {
      case 'learn':
        return <Learn />;
      case 'practice':
        return <Practice />;
      case 'games':
        return <Games />;
      case 'progress':
        return <Progress />;
      default:
        return <Learn />;
    }
  };

  return (
    <Router>
      <div className="flex bg-slate-50 justify-evenly">
        <Sidebar setActiveSection={setActiveSection} />
        <main className="justify-center">
          <div className="max-w-4xl mx-auto">
            <h1 className='title font-bold text-4xl lg:text-5xl text-center text-slate-800'>
              Wise Language Mentor
            </h1>
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/games" element={<Games />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
