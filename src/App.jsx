import { useState } from 'react'
import './app.scss'
import Nav from './components/Nav'
import Docs from './components/Docs'
import MacWindows from "./components/Windows/MacWindows";
import Github from './components/Windows/Github'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume';
import Spotify from './components/Windows/Spotify';
function App() {
  return (
   <>
<main>
  <Nav/>
  <Docs/>
 <Github/>
 <Note/>
 <Resume/>
 <Spotify/>
</main>
   </>
  )
}

export default App
