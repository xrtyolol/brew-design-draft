import { MapPin, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-coffee-dark mb-4">
            Як нас знайти
          </h2>
          <p className="text-coffee-medium">
            Завітайте до нас сьогодні та спробуйте ідеальну чашку кави
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-coffee-dark mr-4" />
                <div>
                  <h3 className="font-playfair font-bold text-coffee-dark">Адреса</h3>
                  <p className="text-coffee-medium">вул. Кавова, 123, Київ, Україна</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-coffee-dark mr-4" />
                <div>
                  <h3 className="font-playfair font-bold text-coffee-dark">Телефон</h3>
                  <p className="text-coffee-medium">+380 44 123 4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-coffee-dark mr-4" />
                <div>
                  <h3 className="font-playfair font-bold text-coffee-dark">Email</h3>
                  <p className="text-coffee-medium">hello@coffeehaven.com</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-playfair font-bold text-coffee-dark mb-2">Години роботи</h3>
                <div className="grid grid-cols-2 gap-2 text-coffee-medium">
                  <div>Понеділок - П'ятниця</div>
                  <div>7:00 - 20:00</div>
                  <div>Субота - Неділя</div>
                  <div>8:00 - 19:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647891702983!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;