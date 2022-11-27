
import express from 'express'
require('dotenv').config()
import config from 'config'
import connect from '../src/utils/connect'
import logger from '../src/utils/logger'
import routes from './routes'
import deserializeUser from './middleware/deserializeUser'

const app = express()
const PORT = config.get<number>('port')

app.use(express.json())
app.use(deserializeUser)

app.listen(PORT, async () => {
  logger.info(`App is running on port http://localhost:${PORT}`)

  await connect()

  routes(app)
})