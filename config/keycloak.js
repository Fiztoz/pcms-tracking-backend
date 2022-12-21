const env = require('dotenv').config();

module.exports = {
    jwtPublicKey: "Iadoghdsgh...",

    jwtAlgorithm: "RS256",
    // client ID configured in Keycloak
    clientId: process.env.KEYCLOAK_CLIENT_ID,
    // if the client access type is set to "confidential" in keycloak, add the client secret here. otherwise, don't set this value.
    //clientSecret: "d8e665af-8caf-4710-a3e9-ec9dbac71715",
    clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
  
    // auth endpoint, right value comes from Keycloak
    authEndpoint:
      "https://sso.pea.co.th/auth/realms/idm/protocol/openid-connect/auth",
  
    // token endpoint, right value comes from Keycloak
    tokenEndpoint:
      "https://sso.pea.co.th/auth/realms/idm/protocol/openid-connect/token",
  
    // user info endpoint, right value comes from Keycloak
    userinfoEndpoint:
      "https://sso.pea.co.th/auth/realms/idm/protocol/openid-connect/userinfo",
  
    // logout endpoint, right value comes from Keycloak
    logoutEndpoint:
      "https://sso.pea.co.th/auth/realms/idm/protocol/openid-connect/logout",
  
    // redirect URI after Keycloak login, should be the full URL of the Strapi instance and always point to the `keycloak/callback` endpoint
    redirectUri: "http://localhost:1337/keycloak/callback",
  
    // default URL to redirect to when login process is finished. In normal cases, this would redirect you back to the application using Strapi data
    //redirectToUrlAfterLogin: "http://localhost:1337/api/stocks",
    //redirectToUrlAfterLogin: "http://localhost:3000/callback",
    redirectToUrlAfterLogin: process.env.KEYCLOAK_REDIRECT_LOGIN,
    // setting these allows the client to pass a `redirectTo` query parameter to the `login` endpoint. If the `redirectTo`
    // parameter is permitted by this array, after login, Strapi will redirect the user to it. Leave empty to disable
    // the functionality.
    permittedOverwriteRedirectUrls: [
      "http://localhost:1337",
      "http://localhost:1338",
    ],
  
    // URL to redirect to after logout
    redirectToUrlAfterLogout: process.env.KEYCLOAK_REDIRECT_LOGOUT,
  
    // enable debug messages in server log
    debug: true,

    appendAccessTokenToRedirectUrlAfterLogin: true,
   
  };
  