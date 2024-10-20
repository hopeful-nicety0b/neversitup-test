FROM node:18.19.1-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY  . .

EXPOSE 8080

