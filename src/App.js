import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
