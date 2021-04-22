// Get the access token from a client application using the Google SDK
const accessToken = getGoogleAccessToken();
// Log the user in to your app
const credentials = Realm.Credentials.google(accessToken);
app.logIn(credentials).then(user => {
  console.log(`Logged in with id: ${user.id}`);
});