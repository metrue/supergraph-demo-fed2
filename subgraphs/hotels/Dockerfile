FROM node:18-bullseye-slim

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY hotels.js .
COPY hotels.graphql .

CMD [ "node", "hotels.js" ]
