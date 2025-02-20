import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/styling/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from "./components/Loader";
import BathAndBody from './pages/home-subpages/BathAndBody';
import PerfumesAndScents from './pages/home-subpages/PerfumesAndScents';
import ViewFullFaceProduct from './components/home/face/face-index/ViewFullFaceProduct';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Brands = lazy(() => import('./pages/home-subpages/Brands'));
const Face = lazy(() => import('./pages/home-subpages/Face'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <section className="asc-body-section">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='brands' element={<Brands />} />
            <Route path='face' element={<Face />} />
            <Route path='face/:uid' element={<ViewFullFaceProduct />} />
            <Route path='bath-and-body' element={<BathAndBody />} />
            <Route path='perfumes-and-scents' element={<PerfumesAndScents />} />
            <Route path='cart' element={<Cart />} />
            <Route path='*' element={<h1>No Match</h1>} />
          </Routes>
        </Suspense>
      </section>
      <Footer />
    </>
  );
}

export default App;
