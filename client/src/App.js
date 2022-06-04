import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
