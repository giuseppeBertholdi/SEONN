
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-seonn-gray-200 py-12 bg-seonn-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display font-medium text-lg mb-4 gradient-text">SEONN</h3>
            <p className="text-sm text-seonn-gray-600 max-w-xs">
              Self-Evolving Organic Neural Network. Redefining artificial intelligence through dynamic neural architectures.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-sm mb-4 uppercase tracking-wider">Connect</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-seonn-gray-600 hover:text-seonn-black transition-colors group flex items-center">
                <span className="w-0 h-px bg-seonn-black transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                Twitter
              </a>
              <a href="#" className="block text-sm text-seonn-gray-600 hover:text-seonn-black transition-colors group flex items-center">
                <span className="w-0 h-px bg-seonn-black transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                LinkedIn
              </a>
              <a href="#" className="block text-sm text-seonn-gray-600 hover:text-seonn-black transition-colors group flex items-center">
                <span className="w-0 h-px bg-seonn-black transition-all duration-300 mr-0 group-hover:w-4 group-hover:mr-2"></span>
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <a href="mailto:info@seonn.ai" className="block text-sm text-seonn-gray-600 hover:text-seonn-black transition-colors">
              info@seonn.ai
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-seonn-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-seonn-gray-500">
            <span className="font-medium">SEONN</span> &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 text-xs text-seonn-gray-500 flex space-x-6">
            <a href="#" className="hover:text-seonn-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-seonn-black transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
