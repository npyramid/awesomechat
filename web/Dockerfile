FROM node:lts-alpine

WORKDIR /front

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .

RUN yarn build
