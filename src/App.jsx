import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpcomingPage from "./pages/UpcomingPage"
import TodayPage from "./pages/TodayPage"
import NotesPage from "./pages/NotesPage"
import SettingsPage from "./pages/SettingsPage"
import Tasks from "./context/Tasks"
import NavbarContextProvider from "./context/NavbarContextProvider"

const App = () => {
  return (
    <Tasks>
      <NavbarContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodayPage />} />
            <Route path="/upcoming" element={<UpcomingPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
      </NavbarContextProvider>
    </Tasks>
  )
}

export default App