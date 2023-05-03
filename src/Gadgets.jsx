export const Gadgets = ({ products }) => {
  return (
    <div>
      <h2>Gadgets List</h2>
      <ol>
        {products.map(({ id, name, description, price }) => (
          <li
            key={id}
            style={{ border: price > 50000 ? "2px orange solid" : null }}
          >
            Name: {name}, Description: {description}, Price: {price}
          </li>
        ))}
      </ol>
    </div>
  );
};
