import { useRef } from 'react';
import zelda from '../assets/images/zelda.png';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import BlogSuggestion from '../assets/components/blogsuggestion';
import ClubSuggestions from '../assets/components/clubsuggestions';

const Homepage = () => {
  const homeRef = useRef(null);
  const clubsRef = useRef(null);
  const blogsRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-[88%] bg-primary text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-programme">COLINK</h1>
          <div className="space-x-6">
            <button onClick={() => scrollToSection(homeRef)} className="hover:text-secondary transition-colors">Home</button>
            <button onClick={() => scrollToSection(clubsRef)} className="hover:text-secondary transition-colors">Clubs</button>
            <button onClick={() => scrollToSection(blogsRef)} className="hover:text-secondary transition-colors">Blogs</button>
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-secondary transition-colors">About Us</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-programme text-primary">Welcome to Colink</h1>
            <p className="text-2xl text-gray-700">Where Clubs And Startups Meet innovation</p>
            <button className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">Get Started</button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img src={zelda} alt="Hero" className="w-full max-w-md mx-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section ref={clubsRef} className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-programme text-primary text-center mb-12">Latest Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <BlogSuggestion />
            <BlogSuggestion />
            <BlogSuggestion />
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section ref={blogsRef} className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-programme text-primary text-center mb-12">Trending Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ClubSuggestions/>
            <ClubSuggestions/>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-programme text-primary text-center mb-12">About Us</h2>
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-700 text-2xl">This platform connects professionals with job opportunities in startups, fostering collaboration and growth. It allows experienced individuals to
                 find roles within innovative companies while offering beginners the chance to learn directly from industry experts. The platform also facilitates partnerships between clubs 
                 and startups, promoting skill development, mentorship, and real-world experience through collaborative projects and networking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-programme mb-4">About Us</h3>
              <p className="text-sm">Brief description about your organization</p>
            </div>
            <div>
              <h3 className="text-xl font-programme mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection(homeRef)} className="text-sm hover:text-secondary">Home</button></li>
                <li><button onClick={() => scrollToSection(clubsRef)} className="text-sm hover:text-secondary">Clubs</button></li>
                <li><button onClick={() => scrollToSection(blogsRef)} className="text-sm hover:text-secondary">Blogs</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="text-sm hover:text-secondary">About Us</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-programme mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: GDGC@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: WIKISPACE</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-programme mb-4 ">Follow Us</h3>
              <div className="flex space-x-4">
                <Instagram 
                  onClick={() => window.open("https://www.instagram.com/")}
                  className="w-10 h-10 cursor-pointer hover:text-secondary"
                />
                <Facebook 
                  onClick={() => window.open("https://www.facebook.com/")}
                  className="w-10 h-10 cursor-pointer hover:text-secondary"
                />
                <Twitter 
                  onClick={() => window.open("https://www.twitter.com/")}
                  className="w-10 h-10 cursor-pointer hover:text-secondary"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; 2025 COLINK. NO rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
