FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node_modules/.bin/ng build
EXPOSE 4200
CMD ["node_modules/.bin/ng", "serve", "--host", "0.0.0.0"]