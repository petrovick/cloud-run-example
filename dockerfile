FROM node:12

ENV PORT 8080

ENV HOST 0.0.0.0

WORKDIR /usr/app/

COPY package.json .

RUN npm install --only=production

COPY . .

CMD [ "npm", "run", "start:prod" ]
