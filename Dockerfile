FROM node:14-alpine
WORKDIR /bantr

COPY --chown=node:node . .

RUN npm ci 
USER node

ENTRYPOINT [ "npm", "run", "db:migrate" ]