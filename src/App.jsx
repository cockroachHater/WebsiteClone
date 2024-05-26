import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Main from './pages/main/Main'

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
        <Route path="about" element={<About />}>
          <Route path="member" element={<div>Member~~</div>} />
        </Route>
        <Route path="gameinfo" element={<GameInfo />} />
      </Route>

      <Route
        path="*"
        element={
          <div>
            <h2>404!</h2>
          </div>
        }
      />
    </Routes>
  )
}

function About() {
  return (
    <div>
      <h2>ABOUT</h2>
      <Outlet />
    </div>
  )
}
function GameInfo() {
  return (
    <div>
      <h2>GameInfo</h2>
      <Outlet />
    </div>
  )
}

export default App
