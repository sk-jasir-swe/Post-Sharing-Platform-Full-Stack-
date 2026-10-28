FROM node:24-alpine
WORKDIR /app

COPY ./Backend ./

RUN npm install

CMD [ "node", "server.js" ]