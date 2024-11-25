
const path = require('path');

module.exports = {
  // ...existing code...
  resolve: {
    alias: {
      Content: path.resolve(__dirname, 'src/container/Blog/Content/'),
    },
    // ...existing code...
  },
  // ...existing code...
};