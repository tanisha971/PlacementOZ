import { useState } from 'react'
import './index.css'

function App() {
  
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-placement-navy">
          Placement<span className="text-placement-purple">OZ</span>
        </h1>

        <p className="mt-4 text-text-secondary">
          Placement Optimize
        </p>

        <button className="mt-8 rounded-lg bg-placement-purple px-6 py-3 font-semibold text-white transition hover:opacity-90">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
