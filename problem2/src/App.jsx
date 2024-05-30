import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'
import Accepting from './components/Accepting';
function App() {
 

  return (
    <>
      <Navbar/>
      <Accepting/>
      <Card/>
    </>
  );
}

export default App
