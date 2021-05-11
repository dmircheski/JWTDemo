# JWTDemo

To fully start application\
nodemon server.js\
nodemon authServer.js

server.js -> returns posts filtered by the user that is logged in\
authServer.js -> User sign in, based on that sign in the user logs in( authenticated ) and gets a acess token. When that token expires user uses /token endpoint to get a new acess token

index.js -> practical example to present JWT token when using asymetric algorithm RS256\

