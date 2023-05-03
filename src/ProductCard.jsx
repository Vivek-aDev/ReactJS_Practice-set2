export const ProductCard = ({ name, price }) => {
  return (
    <div>
      <h2>Product Card</h2>
      <p>
        <b>
          <span style={{ fontWeight: "bold", color: "blue" }}>{name}</span>{" "}
          Price:{" "}
          <span style={{ fontStyle: "italic", color: " green" }}>{price}</span>
        </b>
      </p>
    </div>
  );
};
