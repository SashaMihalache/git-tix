FROM node:lts-alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .
# only prod is for ignoring dev dependencies like the 80mb mongo-memory-server
CMD ["npm", "start"]