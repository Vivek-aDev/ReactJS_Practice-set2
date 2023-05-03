export const Todo = ({ todoItems }) => {
  return (
    <div>
      <h2>Todo</h2>
      {todoItems.map(({ id, title, description, isCompleted }) => (
        <div key={id} style={{ color: isCompleted ? "green" : "red" }}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};
