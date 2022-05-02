const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://csp-bookstore.herokuapp.com',
      changeOrigin: true,
    })
  );
};