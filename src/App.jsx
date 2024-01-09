import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Forms/Register'
import Test1 from './components/Forms/Test1'
import FormSelector from './components/Forms/FormSelector'
import { Routes, Route } from "react-router-dom";
import SpeakerForm from './components/Forms/SpeakerForm'
import AssistantForm from './components/Forms/AssistantForm'

// import Test from './components/Forms/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<FormSelector />}>
          <Route path="speaker" element={<SpeakerForm />} />
          <Route path="assistant" element={<AssistantForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
