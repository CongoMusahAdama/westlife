import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
