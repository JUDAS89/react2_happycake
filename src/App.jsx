import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './views/HomePage'
import ContactsPage from './views/ContactsPage'
import NotFound from './views/NotFound'

const App = () => {

  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Contacts" element={<ContactsPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
