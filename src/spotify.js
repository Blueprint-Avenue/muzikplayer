const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "2a32a4ad3fde414788615dbd7c90a1ba";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
