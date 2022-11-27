
import jwt from 'jsonwebtoken'
import config from 'config'

const priveteKey = config.get<string>('priveteKey')
const publicKey = config.get<string>('publicKey')

const signJwt = (object: Object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(object, priveteKey, {
    ...(options ?? {}),
    algorithm: 'RS256'
  })
}

const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, publicKey)

    return {
      valide: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valide: false,
      expired: error.message === 'jwt expired',
      decoded: null
    }
  }
}

export {
  signJwt,
  verifyJwt
}