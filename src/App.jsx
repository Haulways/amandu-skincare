import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/styling/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from "./components/Loader";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Brands = lazy(() => import('./pages/Brands'));

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section className="grascope-body-section xui-overflow-hidden">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='brands' element={<Brands />} />
            <Route path='*' element={<h1>No Match</h1>} />
          </Routes>
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default App;
