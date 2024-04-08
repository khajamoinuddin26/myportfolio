
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
      <Experience/>
      <SpeedInsights />
    </div>
  );
}

export default App;
