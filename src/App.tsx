import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Factory, Settings, PenTool as Tool, Award, Youtube, } from 'lucide-react';
import { FaWhatsapp as WhatsappIcon } from 'react-icons/fa';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/923214580741"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300"
      >
        <WhatsappIcon className="h-6 w-6" />
      </a>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <Factory className="h-8 w-8" />
            <span className="text-2xl font-bold">PakNail Machines</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-blue-200 transition-colors duration-300">Features</a>
            <a href="#machines" className="hover:text-blue-200 transition-colors duration-300">Our Machines</a>
            <a href="#videos" className="hover:text-blue-200 transition-colors duration-300">Videos</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors duration-300">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            Pakistan's Premier Nail Making Machines
          </h1>
          <p className="text-xl mb-8 max-w-2xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300">
            Industry-leading automatic nail making machines manufactured with precision engineering and cutting-edge technology.
          </p>
          <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-500">
            Get Quote
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">Why Choose Our Machines</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Settings className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automated Production</h3>
              <p className="text-gray-600">Fully automated systems capable of producing thousands of nails per hour</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Tool className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Maintenance</h3>
              <p className="text-gray-600">Simple maintenance procedures with readily available spare parts</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-400">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assured</h3>
              <p className="text-gray-600">ISO certified manufacturing process with quality control at every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section id="machines" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">Our Machine Range</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Industrial Nail Making Machine"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Automatic Nail Making Machine</h3>
                <p className="text-gray-600 mb-4">High-speed automatic nail making machine capable of producing various nail sizes.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Production Speed: 300-400 nails/min</li>
                  <li>• Nail Size Range: 1" - 6"</li>
                  <li>• Power: 7.5 KW</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll opacity-0 translate-x-[100px] transition-all duration-1000 ease-out hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-c6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Wire Drawing Machine"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Wire Drawing Machine</h3>
                <p className="text-gray-600 mb-4">Professional wire drawing equipment for nail production.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wire Diameter: 2mm - 8mm</li>
                  <li>• Drawing Speed: 15-20 m/min</li>
                  <li>• Motor Power: 11 KW</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">See Our Machines in Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9 animate-on-scroll opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out">
              <iframe 
                className="w-full h-[300px]"
                src="https://youtube.com/embed/SSwoAET0VUw" 
                title="Nail Making Machine Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9 animate-on-scroll opacity-0 translate-x-[100px] transition-all duration-1000 ease-out">
              <iframe 
                className="w-full h-[300px]"
                src="https://www.youtube.com/embed/AF9x_fozqiE" 
                title="Production Process"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-on-scroll opacity-0 translate-x-[-100px] transition-all duration-1000 ease-out">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <Phone className="h-6 w-6 text-blue-900" />
                <span>+92 321 4580741</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <Mail className="h-6 w-6 text-blue-900" />
                <span>info@paknailmachines.com</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-blue-900" />
                <span>Industrial Area, Gujranwala, Pakistan</span>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300">
                <Youtube className="h-6 w-6 text-blue-900" />
                <a href="https://youtube.com/@paknailmachines" className="text-blue-900 hover:underline">
                  Watch our videos on YouTube
                </a>
              </div>
            </div>
            <form className="space-y-6 animate-on-scroll opacity-0 translate-x-[100px] transition-all duration-1000 ease-out">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300" rows={4}></textarea>
              </div>
              <button type="submit" className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 PakNail Machines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;