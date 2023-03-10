const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/mytio',
        createProxyMiddleware({
            target:'https://gateway-yl.wsdffeaf.com',
            changeOrigin:true,
        })
    ) 
    
    app.use(
        '/book',
        createProxyMiddleware({
            target:'https://www.vodtw.la',
            changeOrigin:true,
        })
    )
}