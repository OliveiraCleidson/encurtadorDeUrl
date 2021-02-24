<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

This application was created using NestJS, the idea of the application is to shorten a given URL and save it in the bank, we also have an authentication system where the user can register, generate their shortened urls and change the redirect url without affecting the shortened url.

## Swagger
To view api documentation access yourIp/docs or [click here](http://encurtador.api-oliv.com/docs)

This API is avaiable on http://encurtador.api-oliv.com


## Configure Envinroment Variables
In this repository there is an .env.sample file explaining how to configure an .env file

You must create an .env file following the explanation.

## Running APP in Docker
In App Folder
```bash
$ docker build -t backend-shortcut .
$ docker run -d --name <name> -p <yourPort>:4005 backend-shortcut
```

or locally

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Contact
[LinkedIn](https://www.linkedin.com/in/cleidson-oliveira-10a053168/)

E-mail: oliv.cleidson@gmail.com

## License

Nest is [MIT licensed](LICENSE).
