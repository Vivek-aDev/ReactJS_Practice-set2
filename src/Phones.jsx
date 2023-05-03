export const Phones = ({ products }) => {
  const mobilePhones = products.filter(({ name }) => name === "mobile");

  return (
    <div>
      <h2>Phones</h2>
      <ul>
        {mobilePhones.map(({ id, name, description, price }) => (
          <li key={id}>
            {name}, {description}, {price}
          </li>
        ))}
      </ul>
    </div>
  );
};
