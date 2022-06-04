import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';

function App() {
  return (
    <div className="App">
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
