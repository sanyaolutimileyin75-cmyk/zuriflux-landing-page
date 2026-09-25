const Footer = () => {
  return (
    <footer id="contact" className="bg-[#04140E] text-white py-12 lg:py-16 px-6 md:px-12 lg:px-[76px] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Section: Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight text-white">
              Zuri<span className="text-[#22D3EE]">Flux</span>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed max-w-[260px]">
              Smart waste management for the cities of tomorrow. IoT-powered. Data-driven. Built for impact.
            </p>
            
            {/* Social Buttons */}
            <div className="flex items-center gap-2 pt-2">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="X Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Camera Icon (Fixed) */}
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Gallery / Camera"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase mb-5">
              Platform
            </h4>
            <ul className="space-y-3 text-[13px] text-white/50">
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">IoT Sensors</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Analytics Engine</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Route Optimization</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Citizen App</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-[13px] text-white/50">
              <li><a href="#about" className="hover:text-[#22D3EE] transition-colors">About ZuriFlux</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.18em] text-white uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-[13px] text-white/50">
              <li><a href="mailto:hello@zuriflux.io" className="hover:text-[#22D3EE] transition-colors">hello@zuriflux.io</a></li>
              <li>+234 700 000 0000</li>
              <li>Lagos, Nigeria</li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Request a Demo</a></li>
              <li><a href="#" className="hover:text-[#22D3EE] transition-colors">Partnership Enquiries</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-white/40">
          <span>© 2026 ZuriFlux Technologies Ltd. All rights reserved.</span>
          <span>Made with purpose for sustainable cities</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;