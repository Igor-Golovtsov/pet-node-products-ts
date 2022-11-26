
import express from 'express'
require('dotenv').config()
import config from 'config'
import connect from '../src/utils/connect'
import logger from '../src/utils/logger'
import routes from './routes'

const app = express()
const PORT = config.get<number>('port')

app.use(express.json())

app.listen(PORT, async () => {
  logger.info(`App is running on port ${PORT}`)

  await connect()

  routes(app)
})