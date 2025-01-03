import { useRef } from 'react';
import zelda from '../assets/images/zelda.png';
import Logo from '../assets/images/logo.png';
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
    <div className="min-h-screen w-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 w-full px-4 md:px-[2vw] bg-primary text-white p-4 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <img className=" w-24 "src={Logo} alt="COLINK"/>
            <a href="/hub">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors">
                Hub
              </button>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:space-x-6 mx-auto">
            <button onClick={() => scrollToSection(homeRef)} className="hover:text-secondary transition-colors">Home</button>
            <button onClick={() => scrollToSection(clubsRef)} className="hover:text-secondary transition-colors">Clubs</button>
            <button onClick={() => scrollToSection(blogsRef)} className="hover:text-secondary transition-colors">Blogs</button>
            <button onClick={() => scrollToSection(aboutRef)} className="hover:text-secondary transition-colors">About Us</button>
          </div>
        </div>
      </nav>


      <section ref={homeRef} className="pt-24 sm:pt-20 min-h-screen flex items-center bg-gradient-to-br from-background to-white">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-programme text-primary font-bold tracking-tight">
              Welcome to <span className="text-secondary">Colink</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-light leading-relaxed">
              Where Clubs And Startups Meet Innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/login"><button className="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg font-medium">
                Get Started
              </button></a>
              
              <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full duration-500 hover:scale-105">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-xl"></div>
              <img 
                src={zelda} 
                alt="Hero" 
                className="relative w-full max-w-lg mx-auto rounded-xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>


      <section ref={clubsRef} className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-programme text-primary text-center mb-12">Latest Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogSuggestion />
            <BlogSuggestion />
            <BlogSuggestion />
          </div>
        </div>
      </section>

      <section ref={blogsRef} className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-programme text-primary text-center mb-12">Trending Clubs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ClubSuggestions/>
            <ClubSuggestions/>
          </div>
        </div>
      </section>


      <section ref={aboutRef} className="min-h-screen py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-programme text-primary text-center mb-12">About Us</h2>
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-700 text-lg sm:text-2xl">This platform connects professionals with job opportunities in startups, fostering collaboration and growth. It allows experienced individuals to
                 find roles within innovative companies while offering beginners the chance to learn directly from industry experts. The platform also facilitates partnerships between clubs 
                 and startups, promoting skill development, mentorship, and real-world experience through collaborative projects and networking.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-programme mb-4">About Us</h3>
              <p className="text-sm">Brief description about your organization</p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-programme mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection(homeRef)} className="text-sm hover:text-secondary">Home</button></li>
                <li><button onClick={() => scrollToSection(clubsRef)} className="text-sm hover:text-secondary">Clubs</button></li>
                <li><button onClick={() => scrollToSection(blogsRef)} className="text-sm hover:text-secondary">Blogs</button></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="text-sm hover:text-secondary">About Us</button></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-programme mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Email: GDGC@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: WIKISPACE</li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-programme mb-4">Follow Us</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <Instagram 
                  onClick={() => window.open("https://www.instagram.com/")}
                  className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-secondary"
                />
                <Facebook 
                  onClick={() => window.open("https://www.facebook.com/")}
                  className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-secondary"
                />
                <Twitter 
                  onClick={() => window.open("https://www.twitter.com/")}
                  className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:text-secondary"
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
