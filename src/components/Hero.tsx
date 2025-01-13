import { Coffee, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Ласкаво просимо до Coffee Haven
          </h1>
          <p className="text-xl text-white/90 mb-8 font-inter">
            Відчуйте ідеальне поєднання крафтової кави та затишної атмосфери
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-coffee-dark hover:bg-coffee-medium text-white"
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Переглянути меню
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white"
              onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Знайти нас
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center text-white">
              <Coffee className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Преміум кава</h3>
                <p className="text-sm text-white/80">Зерна спеціального сорту</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <Clock className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Працюємо щодня</h3>
                <p className="text-sm text-white/80">7:00 - 20:00</p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <MapPin className="h-6 w-6 mr-3" />
              <div>
                <h3 className="font-semibold">Локація</h3>
                <p className="text-sm text-white/80">вул. Кавова, 123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;