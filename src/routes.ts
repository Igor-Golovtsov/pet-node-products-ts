
import { Express, Request, Response } from 'express'
import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controllers/product.controller'
import { createUserSessionHandler, deleteUserSessionHandler, getUserSessionHandler } from './controllers/session.controller'
import { createUserHandler } from './controllers/user.controller'
import requireUser from './middleware/requireUser'
import validateResource from './middleware/validateResource'
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from './schema/product.schema'
import { createSessionSchema } from './schema/session.schema'
import { createUserSchema } from './schema/user.schema'

const routes = (app: Express) => {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200)
  })

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler)
  app.get('/api/sessions', requireUser, getUserSessionHandler)
  app.delete('/api/sessions', requireUser, deleteUserSessionHandler)


  app.post('/api/products', [requireUser, validateResource(createProductSchema)], createProductHandler);
  app.get('/api/products/:productId', validateResource(getProductSchema), getProductHandler);
  app.put('/api/products/:productId', [requireUser, validateResource(updateProductSchema)], updateProductHandler);
  app.delete('/api/products/:productId', [requireUser, validateResource(deleteProductSchema)], deleteProductHandler);
}

export default routes