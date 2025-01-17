import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BackToTopButton from '../src/components/BackToTop'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
