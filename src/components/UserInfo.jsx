export const UserInfo = ({ user }) => {
  return (
    <div>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};
