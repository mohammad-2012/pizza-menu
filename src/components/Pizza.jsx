export default function Pizza({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={`${pizza.name} img`} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold Out!" : `$${pizza.price}`}</span>
      </div>
    </div>
  );
}
