import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Nav from './components/Nav'
import Footer from './components/Footer';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage'
import FeaturePage from './Pages/FeaturePage'
import ContactPage from './Pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  )
}

