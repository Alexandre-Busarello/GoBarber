import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Rotas sem Middleware de autenticação
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Todas as rotas abaixo passarão por esse Middleware
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
