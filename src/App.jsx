import "./App.css";
import { LoginButton } from "./components/LoginBtn";
import { useOAuth } from "./hooks/useOauth";

function App() {
  const { accessToken, userInfo, error, clearOAuthState } = useOAuth();

  return (
    <div className="App">
      <h1>React OAuth with Clickup</h1>
      {error && <p className="error">{error}</p>}
      {accessToken ? (
        <>
          <UserInfo user={userInfo} />
          <LogoutButton onClick={clearOAuthState} />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
