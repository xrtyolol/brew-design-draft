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
                Mafia
              </span>
            </div>
            <p className="text-white/80">
              Створюємо ідеальні моменти, одна страва за раз.
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors">
                  Головна
                </a>
              </li>
              <li>
                <a href="#menu" className="text-white/80 hover:text-white transition-colors">
                  Меню
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  Про нас
                </a>
              </li>
              <li>
                <a href="#location" className="text-white/80 hover:text-white transition-colors">
                  Локація
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Контакти</h3>
            <ul className="space-y-2 text-white/80">
              <li>вул. Кавова, 123</li>
              <li>Київ, Україна</li>
              <li>+380 44 123 4567</li>
              <li>hello@mafia.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Слідкуйте за нами</h3>
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
          <p>&copy; {new Date().getFullYear()} Mafia. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;