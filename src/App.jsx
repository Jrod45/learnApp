import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex bg-slate-50 justify-evenly">
      <Sidebar />
      <main className="justify-center">
        <div className="max-w-4xl mx-auto">
          <h1 className='title font-bold text-4xl lg:text-5xl text-center text-slate-800'>
            Wise Language Mentor
          </h1>
        </div>
      </main>
    </div>
  )
}

export default App
