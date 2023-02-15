import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path';

import env from '../../config/env';
import { stateRoutesDoc } from './states/state-paths';
import { stateComponents } from './states/state-components';
import { appError } from './app/error-component';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Energy Tracker API',
      version: '1.0.0',
      description: 'API for Energy Tracker Web Application',
    },
    servers: [
      {
        url: `${env.apiUrl}/states-list`,
        description: `${process.env.NODE_ENV} Mode`,
      },
    ],
    tags: [
      {
        name: 'States',
        description: 'State Routes',
      },
    ],
    paths: {
      ...stateRoutesDoc,
    },
    components: {
      schemas: {
        ...appError,
        ...stateComponents,
      },
    },
  },
  apis: [`${path.join(__dirname, '../routes/**/*.ts')}`],
};

export const specs = swaggerJsDoc(options);
