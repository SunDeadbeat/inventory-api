FROM node:20
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
RUN rm -r src/ .env .gitignore nodemon.json README.md tsconfig.json
RUN cp -r build/Release/* .
RUN rm -r build/

ENV PORT=3000
ENV DB_URI=mongodb://host.docker.internal:27017,localhosthost.docker.internal:27018,localhosthost.docker.internal:27019/?replicaSet=rs&readPreference=primary
ENV DB_NAME=inventory

CMD ["node", "index.js"]