FROM node:20-alpine

# Install GNU C++ Compiler (g++) and Python 3
RUN apk add --no-cache g++ python3 coreutils make

WORKDIR /app

COPY package.json server.js ./

RUN npm install --omit=dev

ENV PORT=2000
EXPOSE 2000

CMD ["node", "server.js"]
