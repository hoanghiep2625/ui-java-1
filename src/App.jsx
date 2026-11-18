import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kit from './pages/Kit'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/kit" element={<Kit />} />
      </Routes>
    </BrowserRouter>
  )
}
