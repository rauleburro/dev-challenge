FROM node:lts-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app


COPY package*.json ./
RUN npm i -g npm@latest && npm i

COPY . .

RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "npm", "start" ]
