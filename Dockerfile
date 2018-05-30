FROM node:8.11.1-alpine
ADD package.json package-lock.json /slides/
WORKDIR /slides
RUN npm i