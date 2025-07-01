import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Programs from './components/Programs';
import SuccessStories from './components/SuccessStories';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Programs />
        <SuccessStories />
        <Team />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold text-2xl px-4 py-2 rounded-lg w-fit mb-4">
                FunLingua
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering confident, English-speaking India where language is a bridge to identity and opportunity.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/funlingualanguageacademy" className="text-gray-400 hover:text-orange-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/_funlingua_" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Instagram
                </a>
                <a href="https://youtube.com/@funlingualanguageacademy" className="text-gray-400 hover:text-orange-500 transition-colors">
                  YouTube
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-orange-500 transition-colors">Programs</a></li>
                <li><a href="#success" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
                <li><a href="#team" className="hover:text-orange-500 transition-colors">Our Team</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>📞 8281858400</li>
                <li>📧 funlingualanguageacademy@gmail.com</li>
                <li>📍 Peyad, Thiruvananthapuram</li>
                <li className="mt-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    Startup India Certified
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FunLingua Language Academy. All rights reserved.</p>
            <p className="text-sm mt-2">Certificate DIPP208626 | Recognized under Startup India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;