export const UserProfile = ({ user }) => {
  const { name, age, email } = user;
  return (
    <div>
      <h2>User Profile</h2>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};
