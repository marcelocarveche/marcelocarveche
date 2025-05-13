FROM node:20.13.1-alpine

RUN mkdir -p usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install -g serve
RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["serve", "-n", "-s", "-l", "8080", "./dist"]
