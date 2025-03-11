import logo from './logo.svg';
import './App.css';
import './Parallax.css';
import Summary from './components/Summary';
import Experience from './components/Experience';
import ParallaxDot from './components/common/ParallaxDot';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#f5deb3] to-[#d2b48c] relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 py-64 md:py-96">
      <ParallaxDot />
      <h1 className="text-5xl md:text-6xl font-extrabold mb-32 md:mb-48 text-[#5a3e1b] drop-shadow-lg text-center leading-tight">Hello! <br /> My Name is Jason Lee Zhi Yong.</h1>
      <div className="w-full max-w-5xl">
        <Summary />
        <Experience />
        <Skill />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default App;
