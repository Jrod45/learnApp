import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChalkboardTeacher,
  faComments,
  faGamepad,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('learn');

  const menuItems = [
    {
      id: 'learn',
      icon: faChalkboardTeacher,
      label: 'Learn',
      description: 'Interactive lessons'
    },
    {
      id: 'practice',
      icon: faComments,
      label: 'Practice',
      description: 'Speaking exercises'
    },
    {
      id: 'games',
      icon: faGamepad,
      label: 'Games',
      description: 'Fun challenges'
    },
    {
      id: 'progress',
      icon: faChartPie,
      label: 'Progress',
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
                  <button
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
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>      {/* Mobile Bottom Navigation */}      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-800 text-white border-t border-slate-700">        <nav className="w-full">
          <ul className="grid grid-cols-4 w-full">
            {menuItems.map((item) => (
              <li key={item.id} className="flex justify-center">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex flex-col items-center w-full py-3 ${
                    activeSection === item.id 
                      ? 'text-indigo-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span className="w-6 h-6 flex items-center justify-center mb-1">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;