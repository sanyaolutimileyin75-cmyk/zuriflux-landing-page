import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  // State to manage mobile menu toggle (open/closed)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#051B14] text-white py-4 px-6 md:px-12 fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-2xl font-bold tracking-tight text-white">
            Zuri<span className="text-emerald-400">Flux</span>
          </span>
        </div>

        {/* 2. DESKTOP NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#values" className="hover:text-white transition-colors">Our Values</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        {/* 3. DESKTOP CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium px-5 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
            Log In
          </button>
          <button className="text-sm font-medium bg-[#0088FF] hover:bg-[#0070D8] text-white px-5 py-2 rounded-full transition-all shadow-md">
            Click here for Sponsorship
          </button>
        </div>

        {/* 4. MOBILE HAMBURGER BUTTON (Visible only on small screens) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#051B14] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-slate-300 font-medium mt-4">
          <a href="#platform" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Platform</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Features</a>
          <a href="#values" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Our Values</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">Contact Us</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white">About</a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button className="w-full text-center py-2 rounded-full border border-white/20 hover:bg-white/10 text-white">
              Log In
            </button>
            <button className="w-full text-center py-2 rounded-full bg-[#0088FF] text-white">
              Click here for Sponsorship
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;