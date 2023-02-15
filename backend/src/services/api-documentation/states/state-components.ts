export const stateComponents = {
  States: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        description: 'Unique Identifier',
      },
      name: {
        type: 'string',
        description: 'Name of the state',
      },
      postal: {
        type: 'string',
        description: 'State abbreviation',
      },
    },
    required: ['name', 'postal'],
  },
};
