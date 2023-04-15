// Define constants for Clickup API
export const CLIENT_ID = import.meta.env.VITE_CLICKUP_CLIENT_ID; // Replace with your client ID from Clickup
export const CLIENT_SECRET = import.meta.env.VITE_CLICKUP_SECRET; // Replace with your client secret from Clickup
export const REDIRECT_URI = "http://localhost:3000/callback"; // Replace with your redirect URI from Clickup
export const AUTH_URL = `https://app.clickup.com/api?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const TOKEN_URL = "https://app.clickup.com/api/v2/oauth/token";