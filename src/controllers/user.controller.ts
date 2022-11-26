
import { Request, Response } from 'express'
import { omit } from 'lodash'
import logger from '../utils/logger'
import { createUser } from '../services/user.service'
import { CreateUserInput } from '../schema/user.schema'

const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput['body']>,
  res: Response
) => {
  try {
    const user = await createUser(req.body)

    return res.send(omit(user.toJSON(), 'password'))
  } catch (error: any) {
    logger.error(error.errors)
    return res.status(409).send(error.message)
  }
}

export {
  createUserHandler
}