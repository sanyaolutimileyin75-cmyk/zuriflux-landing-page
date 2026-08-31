import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Stakeholders from './components/Stakeholders';
import MobileApp from './components/MobileApp';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#051B14] text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Stakeholders />
      <MobileApp />
      <Impact />
      <Footer />
    </div>
  );
}

export default App;