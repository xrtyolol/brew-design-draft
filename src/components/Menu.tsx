import { useState } from "react";
import { Coffee, CupSoda, Cake, EggFried } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const menuItems = [
  {
    id: 1,
    name: "Еспресо",
    description: "Насичений та міцний одинарний еспресо",
    price: "₴120",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Капучіно",
    description: "Еспресо з паровим молоком та пінкою",
    price: "₴150",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Круасан",
    description: "Масляний, шаруватий французький круасан",
    price: "₴85",
    category: "food",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Тост з авокадо",
    description: "Хліб на заквасці з пюре з авокадо",
    price: "₴180",
    category: "food",
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const categories = [
  { id: "all", name: "Все", icon: Coffee },
  { id: "coffee", name: "Кава", icon: Coffee },
  { id: "food", name: "Їжа", icon: EggFried },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-coffee-dark mb-4">
            Наше меню
          </h2>
          <p className="text-coffee-medium max-w-2xl mx-auto">
            Відкрийте для себе наш ретельно підібраний вибір кави та страв
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-coffee-dark hover:bg-coffee-medium"
                  : "text-coffee-dark hover:text-coffee-medium"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-coffee-dark font-semibold">{item.price}</span>
                  <Button
                    variant="outline"
                    className="text-coffee-dark hover:text-coffee-medium"
                    onClick={() => window.location.href = "#order"}
                  >
                    Замовити
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;