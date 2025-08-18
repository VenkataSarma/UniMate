import React, { useState } from 'react';
import { 
  Bell, 
  Sun, 
  Moon, 
  User, 
  CheckSquare, 
  FileText, 
  Calendar, 
  DollarSign,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const features = [
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Task Management",
      description: "Organize assignments, projects, and deadlines with smart prioritization"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Certificate Storage",
      description: "Securely store and manage all your important academic certificates"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Planning",
      description: "Create, track, and manage academic and personal events seamlessly"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Financial Tracker",
      description: "Monitor expenses, budgets, and financial goals for students"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "50K+", label: "Tasks Completed" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-orange-50 text-black' : 'bg-black text-orange-500'
    }`}>
      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-orange-50/90 border-orange-200' 
          : 'bg-black/90 border-orange-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-black to-gray-800 text-orange-500' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-600 text-black'
              }`}>
                स
              </div>
              <span className={`text-xl font-bold ${
                isDarkMode ? 'text-black' : 'text-orange-500'
              }`}>Saarathi</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-black hover:text-orange-600' : 'text-orange-500 hover:text-orange-300'
              }`}>Features</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-black hover:text-orange-600' : 'text-orange-500 hover:text-orange-300'
              }`}>About</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-black hover:text-orange-600' : 'text-orange-500 hover:text-orange-300'
              }`}>Contact</a>
              <a href="#" className={`transition-colors ${
                isDarkMode ? 'text-black hover:text-orange-600' : 'text-orange-500 hover:text-orange-300'
              }`}>Help</a>
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center space-x-4">
              {/* Notification Button */}
              <button className={`p-2 rounded-full hover:scale-110 transition-all duration-200 ${
                isDarkMode ? 'hover:bg-orange-100 text-black' : 'hover:bg-orange-900 text-orange-500'
              }`}>
                <Bell className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full hover:scale-110 transition-all duration-200 ${
                  isDarkMode ? 'hover:bg-orange-100 text-black' : 'hover:bg-orange-900 text-orange-500'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Login/Signup */}
              <div className="flex items-center space-x-2">
                
                <button className={`px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-black text-orange-500 hover:bg-gray-800' 
                    : 'bg-orange-500 text-black hover:bg-orange-600'
                }`}>
                  Login/Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-orange-50 to-orange-100' 
            : 'bg-gradient-to-br from-gray-900 to-black'
        }`}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-bold bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-black to-gray-800' 
                  : 'bg-gradient-to-r from-orange-500 to-orange-600'
              }`}>
                Saarathi
              </h1>
              <p className={`text-lg md:text-xl opacity-80 ${
                isDarkMode ? 'text-gray-700' : 'text-orange-300'
              }`}>
                Your Guide to Academic Excellence
              </p>
              <p className={`text-xl md:text-2xl font-medium max-w-3xl mx-auto ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>
                Your Complete Student Life Management Platform
              </p>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-gray-600' : 'text-orange-300'
              }`}>
                Manage tasks, store certificates, plan events, and track finances - all in one powerful platform designed for students.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className={`px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2 text-lg font-medium ${
                isDarkMode 
                  ? 'bg-black text-orange-500 hover:bg-gray-800' 
                  : 'bg-orange-500 text-black hover:bg-orange-600'
              }`}>
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className={`px-8 py-4 rounded-xl border-2 transition-all duration-200 hover:scale-105 text-lg font-medium ${
                isDarkMode 
                  ? 'border-black text-black hover:bg-black hover:text-orange-500' 
                  : 'border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black'
              }`}>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  isDarkMode ? 'text-black' : 'text-orange-500'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-sm md:text-base ${
                  isDarkMode ? 'text-gray-600' : 'text-orange-300'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-black' : 'text-orange-500'
            }`}>
              Everything You Need to Succeed
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-600' : 'text-orange-300'
            }`}>
              Comprehensive tools designed specifically for student life management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode 
                  ? 'border-orange-200 bg-orange-50 hover:border-black hover:shadow-orange-200/50' 
                  : 'border-orange-800 bg-gray-900 hover:border-orange-500 hover:shadow-orange-500/20'
              }`}>
                <div className={`mb-4 ${isDarkMode ? 'text-black' : 'text-orange-500'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-black' : 'text-orange-400'
                }`}>{feature.title}</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-600' : 'text-orange-300'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-orange-100' : 'bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-black' : 'text-orange-500'
            }`}>
              Why Students Choose Saarathi?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isDarkMode ? 'bg-black text-orange-500' : 'bg-orange-500 text-black'
              }`}>
                <Shield className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>Secure & Private</h3>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                Your data is encrypted and protected with enterprise-grade security
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isDarkMode ? 'bg-black text-orange-500' : 'bg-orange-500 text-black'
              }`}>
                <Zap className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>Lightning Fast</h3>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                Optimized for speed and performance across all devices
              </p>
            </div>

            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isDarkMode ? 'bg-black text-orange-500' : 'bg-orange-500 text-black'
              }`}>
                <Users className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>Community Driven</h3>
              <p className={`${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                Built by students, for students, with continuous feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 fill-current ${
                  isDarkMode ? 'text-orange-400' : 'text-orange-400'
                }`} />
              ))}
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${
              isDarkMode ? 'text-black' : 'text-orange-500'
            }`}>
              Ready to Transform Your Student Life?
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-600' : 'text-orange-300'}`}>
              Join thousands of students who are already managing their academic journey with Saarathi
            </p>
            <button className={`px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 text-lg font-medium ${
              isDarkMode 
                ? 'bg-black text-orange-500 hover:bg-gray-800' 
                : 'bg-orange-500 text-black hover:bg-orange-600'
            }`}>
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t transition-colors duration-300 ${
        isDarkMode ? 'border-orange-200 bg-orange-100' : 'border-orange-800 bg-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  isDarkMode ? 'bg-black text-orange-500' : 'bg-orange-500 text-black'
                }`}>
                  स
                </div>
                <span className={`text-lg font-bold ${
                  isDarkMode ? 'text-black' : 'text-orange-500'
                }`}>Saarathi</span>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                Empowering students to achieve their academic goals through smart management tools.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold mb-3 ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>Features</h4>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Task Management</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Certificate Storage</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Event Planning</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Financial Tracker</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-3 ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>Support</h4>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Help Center</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Contact Us</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Privacy Policy</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-3 ${
                isDarkMode ? 'text-black' : 'text-orange-400'
              }`}>Company</h4>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-700' : 'text-orange-300'}`}>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>About</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Blog</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Careers</a></li>
                <li><a href="#" className={`transition-colors ${
                  isDarkMode ? 'hover:text-orange-600' : 'hover:text-orange-400'
                }`}>Press</a></li>
              </ul>
            </div>
          </div>

          <div className={`mt-8 pt-8 border-t text-center text-sm ${
            isDarkMode ? 'border-orange-200 text-gray-700' : 'border-orange-800 text-orange-300'
          }`}>
            <p>&copy; 2025 Saarathi. All rights reserved. Made with ❤️ for students.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;