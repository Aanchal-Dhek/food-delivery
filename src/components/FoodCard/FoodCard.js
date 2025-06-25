const FoodCard = ({ food }) => {
  return (
    <div className="food-card">
      <h3>{food.image} {food.name}</h3>
      <p>₹{food.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default FoodCard;