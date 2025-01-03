import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpage';
import BlogsPages from './pages/blogspage'
import HubPage from './pages/hubPage';
import OTP from './pages/otpverify';
import login from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/hub" element={<HubPage />} />
        <Route path="/blogs" element={<BlogsPages />} />
      </Routes>
    </Router>
  );
}

export default App;
