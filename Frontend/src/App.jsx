import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from "./Pages/Create"
import Feed from "./Pages/Feed"

function App() {
  

  return (
   <Router>
    <Routes>
      <Route path="/feed" element={<Feed/>} />
      <Route path="/create-post" element={<Create/>} />
      
    </Routes>
   </Router>
  )
}

export default App
