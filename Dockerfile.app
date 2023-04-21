FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install && npx tsc

RUN npm run build

CMD [ "npm", "start" ]