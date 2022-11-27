
import { FilterQuery, UpdateQuery } from 'mongoose'
import SessionModel, { SessionDocument } from '../models/session.model'

const createSession = async (userId: string, userAgent: string) => {
  const session = await SessionModel.create({
    user: userId,
    userAgent
  })

  return session.toJSON()
}

const findSessions = async (query: FilterQuery<SessionDocument>) => {
  return SessionModel.find(query).lean()
}

const updateSession = async (query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>) => {
  return SessionModel.updateOne(query, update)
}

export {
  createSession,
  findSessions,
  updateSession
}