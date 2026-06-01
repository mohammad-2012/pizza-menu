import Pizza from "./Pizza";

export default function Menu({ pizzaData }) {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italinan cuisine. {numPizzas} creative dishes to choose
            from. all fprm our stone oven, all organic , all delicious
          </p>

          <div className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizza={pizza} />
            ))}
          </div>
        </>
      ) : (
        <p>We're still working on our menu , Please come back later</p>
      )}
    </main>
  );
}
