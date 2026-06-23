import { Home } from './pages/Home.tsx'
import { About } from './pages/About.tsx'
import { MyBooks } from './pages/MyBooks.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Exact match paths */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review/list/:user_id" element={<MyBooks />} />

        {/* Catch-all 404 fallback page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
