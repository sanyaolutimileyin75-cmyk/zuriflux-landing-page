import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A1F14]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-[1440px] mx-auto h-20 px-6 md:px-12 lg:px-[76px] flex items-center justify-between">
        
        {/* 1. LOGO */}
        <a href="#" className="flex items-center gap-1 cursor-pointer">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Zuri<span className="text-[#22D3EE]">Flux</span>
          </span>
        </a>

        {/* 2. DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#values" className="hover:text-white transition-colors">Our Values</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        {/* 3. DESKTOP CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#login"
            className="text-sm font-medium text-white/80 hover:text-white px-5 py-2.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Log In
          </a>
          <a
            href="#demo"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0088FF] to-[#00C2FF] shadow-[0_4px_20px_rgba(0,136,255,0.35)] hover:opacity-90 transition-opacity"
          >
            Click here for Sponsorship
          </a>
        </div>

        {/* 4. MOBILE HAMBURGER BUTTON */}
        <button 
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A1F14] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-white/80 font-medium">
          <a href="#platform" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-1">Platform</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-1">Features</a>
          <a href="#values" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-1">Our Values</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-1">Contact Us</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white py-1">About</a>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5"
            >
              Log In
            </a>
            <a
              href="#demo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#0088FF] to-[#00C2FF] text-white font-semibold"
            >
              Click here for Sponsorship
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;