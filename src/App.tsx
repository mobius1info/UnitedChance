import Header from './components/Header';
import Hero from './components/Hero';
import CryptoTicker from './components/CryptoTicker';
import Features from './components/Features';
import About from './components/About';
import Statistics from './components/Statistics';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CryptoTicker />
        <Features />
        <About />
        <Statistics />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default App;
