FROM node:19

USER node

RUN mkdir /home/node/backend

WORKDIR /home/node/backend

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn

COPY --chown=node:node . .

CMD ["nodemon", "src/app.ts", "--exec", "ts-node"]
