FROM node:16
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD npx nx serve auth-svc