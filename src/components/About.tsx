import { Coffee, Users, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-coffee-cream mb-4">
            Наша історія
          </h2>
          <p className="text-coffee-cream">
            Coffee Haven було засновано з простою місією: подавати виняткову каву в теплій,
            привітній атмосфері. Кожна чашка, яку ми подаємо, створена з турботою та пристрастю.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-coffee-medium rounded-lg">
            <Coffee className="w-12 h-12 text-coffee-cream mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-coffee-cream mb-2">
              Преміум зерна
            </h3>
            <p className="text-coffee-cream">
              Ми отримуємо наші зерна зі сталих ферм по всьому світу
            </p>
          </div>

          <div className="text-center p-6 bg-coffee-medium rounded-lg">
            <Users className="w-12 h-12 text-coffee-cream mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-coffee-cream mb-2">
              Експерти-бариста
            </h3>
            <p className="text-coffee-cream">
              Наша команда професіоналів захоплена створенням ідеальної чашки
            </p>
          </div>

          <div className="text-center p-6 bg-coffee-medium rounded-lg">
            <Star className="w-12 h-12 text-coffee-cream mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-coffee-cream mb-2">
              Якість понад усе
            </h3>
            <p className="text-coffee-cream">
              Ми ніколи не йдемо на компроміс щодо якості наших інгредієнтів
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;