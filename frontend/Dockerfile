# frontend/Dockerfile.dev
FROM node:14-buster

WORKDIR /app
COPY ./package*.json ./
RUN npm install

COPY . ./
# ローカルで npm install して生成されたnode_modules も含む

CMD ["npm", "start"]
