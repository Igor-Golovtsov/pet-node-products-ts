
import config from 'config'
import { Request, Response } from 'express'
import { createSession, findSessions, updateSession } from '../services/session.service'
import { validatePassword } from '../services/user.service'
import { signJwt } from '../utils/jwt.utils'

const createUserSessionHandler = async (req: Request, res: Response) => {
  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).send('Invalid email or password')
  }

  const session = await createSession(user._id, req.get('user-agent') || '')

  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('accessTokenTtl')}
  )

  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('refreshTokenTtl')}
  )

  res.send({ accessToken, refreshToken })
}

const getUserSessionHandler = async (req: Request, res: Response) => {
  const userId = res.locals.user._id
  const session = await findSessions({ user: userId, valid: true })

  return res.send(session)
}

const deleteUserSessionHandler = async (req: Request, res: Response) => {
  const sessionId = res.locals.user.session

  await updateSession({ _id: sessionId }, { valid: false })

  return res.send({
    accessToken: null,
    refreshToken: null
  })
}

export {
  createUserSessionHandler,
  getUserSessionHandler,
  deleteUserSessionHandler
}