import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import BlogPage from './pages/blogpage';
import BlogsPages from './pages/blogspage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs" element={<BlogsPages />} />
      </Routes>
    </Router>
  );
}

export default App;
