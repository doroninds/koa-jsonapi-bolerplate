require('dotenv').config()
const { APP_PORT } = process.env

module.exports = {
  verbose: true,
  displayName: 'KOA-JSONAPI',
  globals: {
    __SERVER__: `http://localhost:${APP_PORT}`
  }
}
