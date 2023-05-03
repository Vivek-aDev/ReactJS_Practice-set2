import { useState } from "react";

export const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = () => {
    setShowContent(true);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleShowContent}>know more</button>
      {showContent && <p>{content}</p>}
    </div>
  );
};
