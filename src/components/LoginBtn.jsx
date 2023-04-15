import { AUTH_URL } from "../constants.js";

export const LoginButton = () => {
  console.log(AUTH_URL);
  return (
    <button
      className="btn btn-blue"
      onClick={() => (window.location.href = AUTH_URL)}>
      Login with Clickup
    </button>
  );
};
