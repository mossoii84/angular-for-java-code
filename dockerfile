# Docker
# запускаем в терминале -> docker build -t angularjavacode .
# делаем из терминала  ->  docker run -p 4201:4201 angularjavacode
# или при запуске image в докер desktop ставим port-4200 или 4201


# FROM node:alpine
FROM node:20.11.1 as builder
WORKDIR /usr/src/app
COPY . /usr/src/app


RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4201
# CMD ["ng", "serve", "--host", "0.0.0.0"]
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4201"]

