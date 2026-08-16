import { BrowserRouter, Routes, Route } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from './pages/Catalog';
import About from "./pages/About";
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Car from "./pages/Car";

import { CarsProvider } from "./context/CarsContext";
import { LoadingProvider } from "./context/LoadingContext";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <LoadingProvider>
            <CarsProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />

                <Route path="/car/:id" element={<Car />} />
              </Routes>
              <Footer />
            </CarsProvider>
          </LoadingProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
