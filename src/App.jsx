import React from 'react'
import './globals.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
