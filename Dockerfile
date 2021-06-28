FROM node:lts-alpine

# install simple http server for serving static content
# RUN npm install -g http-server

RUN mkdir /usr/src
RUN mkdir /usr/src/snyk-gamification
#RUN mkdir /tmp/extracted_files
COPY . /usr/src/snyk-gamification
WORKDIR /usr/src/snyk-gamification

# install project dependencies
RUN npm install

# build app for production with minification
# RUN npm run build

EXPOSE 8080
# CMD [ "http-server", "dist" ]
CMD ["npm", "run", "serve"]