import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Computer from './Components/Computer';
import { Footer } from './Components/Footer';
import TermsConditions from './Components/Terms';
import { useParams } from "react-router-dom";
import { EditPriceList } from './EditPriceList';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/computer" element={<Computer />} />
    <Route path="/terms" element={<TermsConditions />} />
    <Route path="/ledApi/:id" element={<EditPriceList />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </div>
  );
}

function NotFound(){
  return(
    <div>
    <h1>404 Error</h1>
    </div>
  )
}

export default App;
