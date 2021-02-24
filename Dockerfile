FROM node:14.15.1
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 4005
CMD ["npm","run", "start:prod"]
