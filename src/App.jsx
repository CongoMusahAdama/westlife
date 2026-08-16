import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/AdminLayout'
import AdminOverview from './pages/admin/AdminOverview'
import AdminInventory from './pages/admin/AdminInventory'
import AdminSoldCars from './pages/admin/AdminSoldCars'
import AdminCarForm from './pages/admin/AdminCarForm'
import RequireAdmin from './pages/admin/RequireAdmin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route path="/admin" element={<AdminOverview />} />
          <Route path="/admin/inventory" element={<AdminInventory />} />
          <Route path="/admin/sold" element={<AdminSoldCars />} />
          <Route path="/admin/cars/new" element={<AdminCarForm />} />
          <Route path="/admin/cars/:id/edit" element={<AdminCarForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
