const isDev = process.env.NODE_ENV == "development";
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  isDev,
  resolve
}
