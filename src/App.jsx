import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import BackToTopButton from '../src/components/BackToTop'
import BookMeeting from './pages/BookMeeting';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookMeeting" element={<BookMeeting />} />
        </Routes>
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
