const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) =>{
    app.use(
        ["/api"],
        createProxyMiddleware({
            target: "https://ubongo-library-api.herokuapp.com",
            changeOrigin: true,
        })
    )
}