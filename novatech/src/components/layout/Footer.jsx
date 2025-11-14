 import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-slate-300 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent" />
            <span className="font-semibold text-lg text-white">
              NovaTech <span className="text-primary">Systems</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Empowering smarter living through intelligent automation and
            connected technology. Experience comfort, efficiency, and
            innovation — the NovaTech way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-primary">Home</a></li>
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#products" className="hover:text-primary">Products</a></li>
            <li><a href="#testimonials" className="hover:text-primary">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@novatech.com" className="hover:text-primary">info@novatech.com</a></li>
            <li>Phone: <span className="text-slate-400">+(254) 790-520-178</span></li>
            <li>Address: <span className="text-slate-400">123 Innovation Way, Silver City</span></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-primary"><FaFacebook /></a>
            <a href="#" className="hover:text-primary"><FaTwitter /></a>
            <a href="#" className="hover:text-primary"><FaLinkedin /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} NovaTech Systems. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
