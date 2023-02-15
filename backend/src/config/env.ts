const env = {
  dbHost: process.env.DB_SQL_HOST,
  dbUserName: process.env.DB_SQL_USERNAME as string,
  dbPort: Number(process.env.DB_SQL_PORT),
  dbPassword: process.env.DB_SQL_PASSWORD,
  dbDataBaseName: process.env.DB_SQL_DATABASENAME as string,
  dbDialect: process.env.DB_SQL_DIALECT,
  dbAppPort: Number(process.env.PORT_PROD),
  clientAppUrl: process.env.CLIENT_DOMAIN,
  apiUrl: process.env.API_DOMAIN as string,
  statesDetailsEndpoint: process.env.USE_STATE_RAPID_API_ENDPOINT as string,
  statesDetailsSecretKey: process.env.USE_STATE_RAPID_API_KEYS as string,
  statesDetailsHost: process.env.USE_STATE_RAPID_API_HOST as string,
};

if (process.env.NODE_ENV === 'test') {
  env.dbDataBaseName = process.env.DB_SQL_DATABASENAME_TESTS as string;
  env.dbAppPort = Number(process.env.PORT_TESTS);
}

export default env;
