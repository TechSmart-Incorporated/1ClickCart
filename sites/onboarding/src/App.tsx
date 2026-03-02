import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Forms from './pages/Forms'
import Landing from './pages/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
