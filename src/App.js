import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Pnf from './components/Pnf'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path={`/`} element={<Home/>} />
          <Route path={`/create`} element={<Create/>} />
          <Route path={`/update`} element={<Update/>} />
          <Route path={`/*`} element={<Pnf/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
