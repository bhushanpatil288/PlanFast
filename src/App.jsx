import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpcomingPage from "./pages/UpcomingPage"
import TodayPage from "./pages/TodayPage"
import NotesPage from "./pages/NotesPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<UpcomingPage />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/notes" element= {<NotesPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App