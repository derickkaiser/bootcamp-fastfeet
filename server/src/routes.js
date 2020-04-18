import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import CheckDeliveryController from './app/controllers/CheckDeliveryController';
import StartDeliveryController from './app/controllers/StartDeliveryController';
import EndDeliveryController from './app/controllers/EndDeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import AllDeliveryProblemController from './app/controllers/AllDeliveryProblemController';
import CancelDeliveryController from './app/controllers/CancelDeliveryController';
import CheckDeliveredDeliveryController from './app/controllers/CheckDeliveredDeliveryController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliverymen', DeliverymanController.index);

routes.get('/deliveryman/:id/deliveries', CheckDeliveryController.index);
routes.get(
  '/deliveryman/:id/delivered_deliveries',
  CheckDeliveredDeliveryController.index
);

/* DeliveryProblem's routes */
routes.get('/delivery/:id/problems', DeliveryProblemController.index);

routes.put('/delivery/:id/end_delivery', EndDeliveryController.update);
routes.put('/delivery/:id/withdraw_delivery', StartDeliveryController.update);

routes.post('/delivery/:id/problems', DeliveryProblemController.store);

routes.get('/delivery_problems', AllDeliveryProblemController.index);

routes.use(authMiddleware);

/* Recipient's routes */
routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

/* File's routes */
routes.post('/files', upload.single('file'), FileController.store);

/* Deliveryman's routes */
routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

/* Delivery's routes */
routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

/* CancelDelivery's routes */
routes.delete('/problem/:id/cancel-delivery', CancelDeliveryController.delete);

export default routes;
