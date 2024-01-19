FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm i 

COPY . .

RUN npm run build

FROM node:20-alpine AS production

ARG NODE_ENV=production  
ENV NODE_ENV=${NODE_ENV}


WORKDIR /usr/src/app 

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --omit=dev

COPY --from=development /usr/src/app/dist ./dist

CMD ["npm", "run", "start:prod"]