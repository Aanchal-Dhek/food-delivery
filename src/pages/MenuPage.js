import FoodCard from "../components/FoodCard/FoodCard";

const foods = [
  { id: 1, name: "Pizza", price: 299, image: "🍕" },
  { id: 2, name: "Burger", price: 199, image: "🍔" },
  { id: 3, name: "Fries", price: 149, image: "🍟" },
];

const MenuPage = () => {
  return (
    <div>
      <h1>Our Menu</h1>
      <div className="menu-grid">
        {foods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;