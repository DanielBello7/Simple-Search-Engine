


const app = require('../app');
const http = require('http');

const server = http.createServer(app);

const port = process.env.PORT || 2022;
app.set('port', port);

function onListening() {
  console.log(`server active on http://localhost:${port}`);
}

function onError(error) {
  switch (error.code) {
    case 'EACCES':
      Log.error(error.message);
      return process.exit(1);

    case 'EADDRINUSE':
      Log.error(error.message);
      return process.exit(1);

    default:
      throw error;
  }
}

server.on('listening', onListening);
server.on('error', onError);

server.listen(port);