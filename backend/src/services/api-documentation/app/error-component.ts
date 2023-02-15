export const appError = {
  AppError: {
    type: 'object',
    properties: {
      error: {
        type: 'object',
        description: 'Global Error handler',
        properties: {
          name: {
            type: 'string',
            description: 'Name of the Error',
          },
          message: {
            type: 'string',
            description: 'Error message',
          },
          status: {
            type: 'number',
            description: 'Status code',
          },
          trace: {
            type: 'string',
            description: 'Stack trace for error',
          },
          code: {
            type: 'number',
            description: 'Code Identifier',
          },
          error: {
            type: 'boolean',
            description: 'Error confirmation',
          },
        },
      },
    },
  },
};
