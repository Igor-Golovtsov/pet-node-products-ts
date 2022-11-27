
import { omit } from 'lodash'
import UserModel, { UserInput, UserDocument } from '../models/user.model'

const createUser = async (input: UserInput) => {
  try {
    return await UserModel.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}

type ValidatePasswordData = {
  email: string,
  password: string
}

const validatePassword = async ({ email, password }: ValidatePasswordData) => {
  const user = await UserModel.findOne({ email })

  if (!user) {
    return false
  }

  const isValid = await user.comparePassword(password)

  if (!isValid) {
    return false
  }

  return omit(user.toJSON(), 'password')
}

export {
  createUser,
  validatePassword
}