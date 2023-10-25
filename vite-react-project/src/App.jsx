import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import routes from './routes'
// import Header from './components/common/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import About from './components/pages/About';
// import Blog from './components/pages/Blog';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App
