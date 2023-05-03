import { useState } from "react";

export const MyGadgets = ({ products }) => {
  const [highlightExpensive, setHighlightExpensive] = useState(false);

  const handleHighlightExpensive = () => {
    setHighlightExpensive(true);
  };

  const expensiveStyle = {
    backgroundColor: "lightgreen",
    fontWeight: "bold",
    fontStyle: "italic"
  };

  return (
    <div>
      <h2>My Gadgets List</h2>
      <ol>
        {products.map(({ id, name, description, price }) => (
          <li
            key={id}
            style={highlightExpensive && price > 50000 ? expensiveStyle : null}
          >
            {name}, {description}, {price}
          </li>
        ))}
      </ol>
      <button onClick={handleHighlightExpensive}>
        Highlight Expensive Gadgets
      </button>
    </div>
  );
};
