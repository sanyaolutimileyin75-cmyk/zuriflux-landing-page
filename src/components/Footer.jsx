const Footer = () => {
  return (
    <footer id="contact" className="bg-[#051B14] text-slate-300 py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <div className="text-2xl font-bold text-white mb-3">
            Zuri<span className="text-emerald-400">Flux</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Smart waste management for the cities of tomorrow. IoT-powered. Data-driven. Built for impact.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">IoT Sensors</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Analytics Engine</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Route Optimization</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Citizen App</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Integrations</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About ZuriFlux</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Mission</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Press Kit</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@zuriflux.io" className="hover:text-emerald-400 transition-colors">hello@zuriflux.io</a></li>
            <li>+234 700 000 0000</li>
            <li>Lagos, Nigeria</li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Request a Demo</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Partnership Inquiries</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 border-t border-white/10 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} ZuriFlux Technologies Ltd. All rights reserved.</span>
        <span>Built for cleaner African cities.</span>
      </div>
    </footer>
  );
};

export default Footer;