import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import SignatureDishes from './components/SignatureDishes';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <SignatureDishes />
        <Gallery />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
