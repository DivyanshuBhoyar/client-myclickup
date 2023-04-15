import { useEffect, useState } from "react";

import { CLIENT_ID, CLIENT_SECRET, TOKEN_URL } from "../constants.js";

export const useOAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  // Define a function to exchange authorization code for access token
  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post(TOKEN_URL, {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      });
      const { access_token } = response.data;
      console.log("access tk", accessToken);
      setAccessToken(access_token);
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchUserInfo = async (token) => {
    console.log("idhar aaya mai", token);
    try {
      const response = await axios.get("https://api.clickup.com/api/v2/user", {
        headers: {
          Authorization: token,
        },
      });
      const { user } = response.data;
      setUserInfo(user);
    } catch (err) {
      setError(err.message);
    }
  };

  const clearOAuthState = () => {
    setAccessToken(null);
    setUserInfo(null);
    setError(null);
  };

  // obtain code and use it
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const code = currentUrl.searchParams.get("code");
    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  // refetch user
  useEffect(() => {
    if (accessToken) {
      fetchUserInfo(accessToken);
    }
  }, [accessToken]);

  return { accessToken, userInfo, error, clearOAuthState };
};
