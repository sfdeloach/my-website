# Build stage
FROM node:22-alpine3.22 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY public/ ./public
COPY src/ ./src
COPY index.html ./

RUN npm run build

# Production stage
FROM nginx:alpine3.22 AS production-stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
EXPOSE 80
