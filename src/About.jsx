import { useState } from "react";

export const About = ({ heading, name, learning }) => {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(true);
  };
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={handleShowContent}>Know More</button>
      {showContent && <p>{learning}</p>}
    </div>
  );
};
