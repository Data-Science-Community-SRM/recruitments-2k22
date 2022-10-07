//import gsap from "gsap";
import './App.css';
import Navbar from './Components/Navbar';
import Domains from './Components/Domains';
import Events from './Components/Events';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Domains />
            <Events />
            <Footer />
        </div>
    );
}

export default App;
