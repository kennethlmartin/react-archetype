ARG NODE_VERSION=11.1.0-alpine

###
# STAGE 1: Base
###
FROM node:$NODE_VERSION as base
RUN apk --no-cache add git
RUN npm install -g npm-check-updates

ENV NODE_PATH=/src
WORKDIR $NODE_PATH

###
# STAGE 2: Build
###
FROM base as build

WORKDIR $NODE_PATH
COPY package.json package-lock.json .npmrc ./
RUN npm install
COPY . .

RUN npm run build
RUN npm prune --production

###
# STAGE 3: Production
###
FROM node:$NODE_VERSION

ENV NODE_PATH=/src
ENV APP_PORT=3000

WORKDIR $NODE_PATH
COPY --from=build $NODE_PATH .

EXPOSE $APP_PORT
CMD ["npm", "start"]
