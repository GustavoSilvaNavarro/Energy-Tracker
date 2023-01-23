# Energy Tracker App

<p align="center">
  <img src="https://user-images.githubusercontent.com/66889974/213705383-18ab7760-b9a9-4195-a8c6-bb64cc2c2fd4.png" />
</p>

Energy Tracker is a web application to keep track and see the trend of the Oil & Gas Production throughout the USA (by state and year). Beside that, you can check the energy consumption (electricity) associated to the production of Oil & Gas. You can check all this information in a beautiful dashboard that includes charts and tables.

## Screenshots

<p align="center">
  <img src="https://user-images.githubusercontent.com/66889974/213713636-0c36740f-70f2-49dc-a850-5868cb50a056.png" />

  <img src="https://user-images.githubusercontent.com/66889974/213713746-8c82712e-abec-47f8-af3c-9c0777da3a26.png" />

  <img src="https://user-images.githubusercontent.com/66889974/213714045-d0a63ba9-a776-428a-bd9b-16de48aab8e9.png" />
</p>

## Getting started
1. Clone the repo
```shell
git clone https://github.com/GustavoSilvaNavarro/Energy-Tracker.git
cd Energy-Tracker
```

2. Run command to install dependencies backend and frontend
```shell
yarn || npm i
```

3. As another option to not deal with to install other softwares. You can use Docker, using the .env files in the backend and frontend. You can just run the following command (after that it will download everything you need to run the app and just go to http://localhost:3000):
```shell
docker-compose up --build
```

### Backend
1. Server is using SQL database, You should create a database with the name of your preferences and create a .env file with the following keys
```js
// SERVER APPLICATION
PORT_PROD=8080

// DB connection to SQL
DB_SQL_HOST= //example 127.0.0.1
DB_SQL_USERNAME=  //example root
DB_SQL_PORT=  //example 3306
DB_SQL_PASSWORD= // user's password
DB_SQL_DATABASENAME=  //database name
DB_SQL_DIALECT=  //example mysql

// Client domain
CLIENT_DOMAIN_URL= //example http://localhost:3000

// USA STATES RAPID API KEYS
USE_STATE_RAPID_API_ENDPOINT=
USE_STATE_RAPID_API_KEYS=
USE_STATE_RAPID_API_HOST=
```

2. Run development server
```shell
yarn run start:dev
```

### Frontend
1. Create a .env file with the following keys
```js
// EIA API KEYS AND ENDPOINTS
REACT_APP_OPEN_DATA_API_KEY=
REACT_APP_URL_OPEN_DATA_API=
REACT_APP_ENDPOINT_OPEN_DATA=
REACT_APP_NATURAL_GAS_PRODUCTION=
REACT_APP_NET_GENERATION=

// SERVER URL ENDPOINT
REACT_APP_URL_BASE_SERVER=
```
2. Run react in developer mode
```shell
yarn start
```

## Built with
### Backend
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework
* [NodeJs](https://nodejs.org/en/) - An open-source, cross-platform JavaScript runtime environment.
* [Sequelize](https://sequelize.org/) - ORM for SQL Databases
* [MariaDB](https://mariadb.org/) / [PostgresSQL](https://www.postgresql.org/) - SQL Database
* [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript.
* [Docker](https://docs.docker.com/) - Backend server was dockerized to run in a Docker container

### Frontend
* [React](https://reactjs.org/) - Front end library for building user interfaces.
* [Tailwindcss](https://tailwindcss.com/) - CSS Framework to style applications.
* [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript.
* [PWA](https://developer.chrome.com/docs/workbox/) - Progressive Web App (Stale While Validate Strategy)
* [Docker](https://docs.docker.com/) - Frontend server was dockerized to run in a Docker container.

## Author
* Gustavo Silva Navarro - [GitHub](https://github.com/GustavoSilvaNavarro) - [Linkedin](https://www.linkedin.com/in/gustavo-silva-navarro/)
