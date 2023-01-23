FROM node:19-alpine as client

USER node

RUN mkdir /home/node/frontend

WORKDIR /home/node/frontend

COPY --chown=node:node package*.json ./
COPY --chown=node:node yarn.lock ./

RUN yarn

COPY --chown=node:node . .

CMD ["sh", "-c", "npm start"]
