FROM node

WORKDIR /app

RUN npm install yarn

COPY package.json ./
RUN yarn install --legacy-peer-deps

COPY ./ ./

CMD ["npm", "start"]

EXPOSE 3000