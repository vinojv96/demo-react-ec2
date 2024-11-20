import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Home = React.lazy(()=> import('./Home'))
const About = React.lazy(()=> import( './About'));

function App() {
  return (
    <div className="App">
     <Router>
      <nav>
      <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
      </nav>
     <Suspense fallback={<div> Loading </div>}>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
     </Routes>
     </Suspense>
     </Router>
    </div>
  );
}

export default App;
