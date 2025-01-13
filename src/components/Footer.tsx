import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Coffee className="h-8 w-8" />
              <span className="ml-2 text-xl font-playfair font-bold">
                Coffee Haven
              </span>
            </div>
            <p className="text-white/80">
              Crafting perfect moments, one cup at a time.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/80 hover:text-white transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#location" className="text-white/80 hover:text-white transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>123 Coffee Street</li>
              <li>City, Country</li>
              <li>+1 234 567 890</li>
              <li>hello@coffeehaven.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Coffee Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;