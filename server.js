//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

console.log('server running on port ' + 8080);