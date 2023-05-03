import { useState } from "react";

export const ColorPicker = ({ red, blue, green }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (code) => {
    if (selectedColor !== code) {
      setSelectedColor(code);
    }
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <button onClick={() => handleColorClick(red)}>Red Color</button>
      <button onClick={() => handleColorClick(blue)}>Blue Color</button>
      <button onClick={() => handleColorClick(green)}>Green Color</button>
      {selectedColor && <p>HEX code: {selectedColor}</p>}
    </div>
  );
};
