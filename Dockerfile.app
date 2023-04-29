FROM node:14

WORKDIR /app

COPY . .

RUN npm install && npx tsc

RUN npm run build

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

CMD ["/wait-for-it.sh", "db:3306", "--", "npm", "start"]
