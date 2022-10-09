import gsap from "gsap";
import './App.css';
import Navbar from './Components/Navbar';
import Domains from './Components/Domains';
import Events from './Components/Events';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Particle from './Components/Particle';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Focus from "./Components/Focus";
gsap.registerPlugin(ScrollTrigger);
function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <div className='particle'>
                <Focus />
                <Domains />
                <Events />
                <Particle />
            </div>
            <Footer />
        </div>
    );
}

export default App;
