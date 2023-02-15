const stateList = {
  tags: ['States'],
  summary: 'Get all states info',
  description: 'Retrieve list of states',
  responses: {
    200: {
      description: 'Successful Response - Return array of objects with the states info',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/States',
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - Return an error related to client error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/AppError',
          },
        },
      },
    },
  },
};

const callStates = {
  tags: ['States'],
  summary: 'Get States info from API',
  description: 'Call API request with the states info',
  responses: {
    200: {
      description: 'Successful Response - Return the list of states confirming that were stored into DB',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/States',
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - Return an error related to client error',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/AppError',
          },
        },
      },
    },
  },
};

export const stateRoutesDoc = {
  '/details': {
    get: stateList,
  },
  '/list-states': {
    get: callStates,
  },
};
