# node:16-alpine
FROM node@sha256:fcb03294d3c0695cf9762dec94c0366f08e7a8c6a3c1e062d38c80ac30684d8a

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Running on port 3000
CMD ["npm", "run", "start:prod"]