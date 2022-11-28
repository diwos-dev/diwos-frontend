
const moduleExports = {}

if (process.env.NODE_ENV === 'development') {
  moduleExports.URL_FE = 'http://localhost:1337/'
  moduleExports.URL_BE = 'http://localhost:1337/'
  moduleExports.URL_WS = 'http://localhost:13372/'
} else {
  moduleExports.URL_FE = 'http://diwos.ru/'
  moduleExports.URL_BE = 'http://server.diwos.ru/'
  moduleExports.URL_WS = 'http://websocket.diwos.ru/'
}




module.exports = moduleExports
