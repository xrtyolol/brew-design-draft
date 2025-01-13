import { useState } from "react";
import { Coffee, Pizza, Salad } from "lucide-react";
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
    name: "Суші Філадельфія",
    description: "Лосось, крем сир, огірок, авокадо",
    price: "₴450",
    category: "sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Піца Маргарита",
    description: "Томатний соус, моцарела, базилік",
    price: "₴350",
    category: "pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Цезар",
    description: "Куряче філе, салат романо, пармезан, соус цезар",
    price: "₴280",
    category: "salad",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Бургер класичний",
    description: "Яловича котлета, сир чеддер, салат, томати",
    price: "₴320",
    category: "fastfood",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const categories = [
  { id: "all", name: "Все", icon: Coffee },
  { id: "sushi", name: "Суші", icon: Coffee },
  { id: "pizza", name: "Піца", icon: Pizza },
  { id: "salad", name: "Салати", icon: Salad },
  { id: "fastfood", name: "Фастфуд", icon: Coffee },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-coffee-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Наше меню
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Відкрийте для себе наш ретельно підібраний вибір страв
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id
                  ? "bg-white text-coffee-dark hover:bg-white/90"
                  : "text-white hover:text-white/90 border-white/20"
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
            <Card key={item.id} className="overflow-hidden bg-white/10 hover:bg-white/20 transition-colors border-white/20">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-white">{item.name}</CardTitle>
                <CardDescription className="text-white/80">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{item.price}</span>
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