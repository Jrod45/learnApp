import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChalkboardTeacher,
  faComments,
  faGamepad,
  faChartPie,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('learn');

  const menuItems = [
    {
      id: 'home',
      icon: faHome,
      label: 'Home',
      path: '/home',
      description: 'Welcome page'
    },
    {
      id: 'learn',
      icon: faChalkboardTeacher,
      label: 'Learn',
      path: '/learn',
      description: 'Interactive lessons'
    },
    {
      id: 'practice',
      icon: faComments,
      label: 'Practice',
      path: '/practice',
      description: 'Speaking exercises'
    },
    {
      id: 'games',
      icon: faGamepad,
      label: 'Games',
      path: '/games',
      description: 'Fun challenges'
    },
    {
      id: 'progress',
      icon: faChartPie,
      label: 'Progress',
      path: '/progress',
      description: 'Track your journey'
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}      <div className="hidden lg:block h-screen w-72 bg-slate-800 text-white fixed left-0 top-0">
        <div className="px-8 py-10 h-full flex flex-col">
          <h2 className="text-2xl font-bold m-5 px-2 text-center">Language Menu</h2>
          <br />
          <nav className="flex-1">
            <ul className="flex flex-col gap-6 px-2">
              {menuItems.map((item) => (
                <li key={item.id} className="group">
                  <Link
                    to={item.path}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full p-3 rounded-lg transition-all duration-200 flex items-center
                      ${activeSection === item.id 
                        ? 'bg-indigo-600 text-white' 
                        : 'hover:bg-slate-700'
                      }`}
                  >                    <span className="w-10 h-10 flex items-center justify-center mr-4">
                      <FontAwesomeIcon icon={item.icon} className={`text-xl ${activeSection === item.id ? 'scale-110' : ''}`} />
                    </span>
                    <div className="text-left">
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className={`text-xs mt-0.5 ${activeSection === item.id ? 'text-indigo-200' : 'text-slate-400'}`}>
                        {item.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>      {/* Mobile Bottom Navigation */}      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-800 text-white border-t border-slate-700">
        <nav className="w-full">
          <ul className="grid grid-cols-5 w-full">
            {menuItems.map((item) => (
              <li key={item.id} className="flex justify-center">
                <Link
                  to={item.path}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex flex-col items-center w-full py-3 gap-1 ${
                    activeSection === item.id 
                      ? 'text-indigo-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="w-8 h-8 flex items-center justify-center mb-1">
                    <FontAwesomeIcon icon={item.icon} className="text-lg" />
                  </span>
                  <span className="text-xs font-medium leading-tight">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;