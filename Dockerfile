FROM node:alpine
WORKDIR /usr/local/apps/myapp/rest
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

EXPOSE 8000

RUN npm install && npm cache clean --force
CMD ["npm", "run", "start"]