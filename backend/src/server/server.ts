import express, { Application } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
// import morgan from 'morgan';

import env from '../config/env';
import stateDetailsRoutes from '../routes/stateDetails-routes';
import { specs } from '../services/api-documentation/swagger';
import { pageNotFound } from '../middleware/pageNotFound';
import { errorHandler } from '../middleware/error-handler';

const app: Application = express();

app.set('port', process.env.PORT || env.dbAppPort || 8080);

app.use(express.json());
app.use(
  cors({
    origin: env.clientAppUrl,
  })
);
// app.use(morgan('dev'));

app.use('/states-list', stateDetailsRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use('*', pageNotFound);
app.use(errorHandler);

export default { app };
