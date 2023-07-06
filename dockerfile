FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./

RUN npm cache clean --force
RUN npm install

COPY . .
RUN node_modules/.bin/ng build
RUN npm run build --prod

EXPOSE 5004

CMD ["node_modules/.bin/ng", "serve", "--host", "0.0.0.0", "--port", "5004"]
