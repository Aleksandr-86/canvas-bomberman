ARG BUILD_IMAGE="node:16-alpine3.17"
ARG SERVER_IMAGE=$BUILD_IMAGE
ARG SERVER_PORT=3001
ARG CLIENT_IMAGE="nginx:1.23.3-alpine"
ARG CLIENT_PORT=3000

FROM $BUILD_IMAGE AS builder

WORKDIR /build

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn lerna bootstrap
RUN yarn build

# Server
FROM $SERVER_IMAGE AS server

WORKDIR /app

COPY --from=builder /build/packages/server/dist/ /app/
COPY --from=builder /build/packages/server/package.json /app/package.json
COPY --from=builder /build/yarn.lock /app/yarn.lock

RUN yarn install --production=true

# Link client
COPY --from=builder /build/packages/client /app/node_modules/client

EXPOSE $SERVER_PORT
ENV ENV_NODE=production
ENTRYPOINT ["node", "/app/index.js"]

# Client image
FROM $CLIENT_IMAGE AS client

WORKDIR /app

COPY --from=builder /build/packages/client/dist/ /app/
COPY --from=builder /build/packages/client/nginx.conf /etc/nginx/nginx.conf

EXPOSE $CLIENT_PORT
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
