FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN npx tsc

EXPOSE 5000

CMD ["npm", "start"]