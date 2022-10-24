FROM node:16
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD npx nx serve fe --host 0.0.0.0