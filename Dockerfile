FROM node:alpine as builder
LABEL maintainer="Haseeb Majid <hello@haseebmaji.dev>"
WORKDIR /app
COPY . .
RUN yarn install
RUN ["yarn", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html