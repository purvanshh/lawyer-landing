import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import CorporateSupport from './components/CorporateSupport/CorporateSupport';
import Features from './components/Features/Features';
import Expertise from './components/Expertise/Expertise';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <CorporateSupport />
        <Features />
        <Expertise />
        <Testimonials />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
