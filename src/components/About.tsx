import { Coffee, Users, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-coffee-dark mb-4">
            Our Story
          </h2>
          <p className="text-coffee-medium">
            Coffee Haven was founded with a simple mission: to serve exceptional coffee in a warm,
            welcoming environment. Every cup we serve is crafted with care and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-coffee-cream rounded-lg">
            <Coffee className="w-12 h-12 text-coffee-dark mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-coffee-dark mb-2">
              Premium Beans
            </h3>
            <p className="text-coffee-medium">
              We source our beans from sustainable farms around the world
            </p>
          </div>

          <div className="text-center p-6 bg-coffee-cream rounded-lg">
            <Users className="w-12 h-12 text-coffee-dark mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-coffee-dark mb-2">
              Expert Baristas
            </h3>
            <p className="text-coffee-medium">
              Our skilled team is passionate about crafting the perfect cup
            </p>
          </div>

          <div className="text-center p-6 bg-coffee-cream rounded-lg">
            <Star className="w-12 h-12 text-coffee-dark mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-bold text-coffee-dark mb-2">
              Quality First
            </h3>
            <p className="text-coffee-medium">
              We never compromise on the quality of our ingredients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;