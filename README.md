<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

This application was created using NestJS, the idea of the application is to shorten a given URL and save it in the bank, we also have an authentication system where the user can register, generate their shortened urls and change the redirect url without affecting the shortened url.

This API is avaiable on http://encurtador.api-oliv.com

## Documentation
To view swagger documentation access yourIp/docs or [click here](http://encurtador.api-oliv.com/docs)
You can also import into your [insomnia](https://insomnia.rest/) via the insomnia.json file

Before creating the application, I created a diagram to understand how the API should behave.

There are some things I could put in the application domain as an email validator among other things, but I merged some things in the domain and others using the power of NestJS.

[Diagram Link](https://whimsical.com/backend-encurtador-VHeLSDJAxnHe9RAQgsU4JA)



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
$ npm run build
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

I do not know how to speak English, but I have little knowledge of writing and I am able to understand most of the documentation, I am in a learning process.

## License

Nest is [MIT licensed](LICENSE).
