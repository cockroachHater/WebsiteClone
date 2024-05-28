import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Main from './pages/main/Main'
import ErrorPage from './pages/error/ErrorPage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="" element={<Main />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
export default App
