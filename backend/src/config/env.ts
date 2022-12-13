const env = {
  dbHost: process.env.DB_SQL_HOST,
  dbUserName: process.env.DB_SQL_USERNAME as string,
  dbPort: Number(process.env.DB_SQL_PORT),
  dbPassword: process.env.DB_SQL_PASSWORD,
  dbDataBaseName: process.env.DB_SQL_DATABASENAME as string,
  dbDialect: process.env.DB_SQL_DIALECT,
  dbAppPort: Number(process.env.PORT_PROD),
  clientAppUrl: process.env.CLIENT_DOMAIN,
  opeDataPublicKey: process.env.OPEN_DATA_API_KEY as string,
  openDataBaseUrl: process.env.URL_OPEN_DATA_API as string,
  endPointApi: process.env.ENDPOINT_OPEN_DATA as string,
};

export default env;
