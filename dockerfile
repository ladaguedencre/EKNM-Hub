FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./

RUN npm cache clean --force
RUN npm install

COPY . .
RUN node_modules/.bin/ng build
RUN npm run build --prod

FROM nginx:latest AS ngi

COPY --from=build /app/dist/eknm-hub /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 5004