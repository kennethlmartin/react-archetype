***
**React Archetype** - Boilerplate for React projects.
***

[![David](https://img.shields.io/david/kennethlmartin/react-archetype.svg?style=for-the-badge)](https://david-dm.org/kennethlmartin/react-archetype)

### Table of Contents
- **[Development](#development)**
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
  - [Running Scripts](#running-scripts)
  - [Environment Variables](#environment-variables)

***

## Development
This project uses [Docker](https://docs.docker.com/userguide) to provision a local development environment. Please read these instructions in their entirety before continuing.

**These instructions are intended for use with macOS.** Your mileage may vary in other environments.

### Dependencies
- **[Docker for Mac](https://docs.docker.com/docker-for-mac/)**

### Getting Started
1. `docker-compose build` - Build the docker compose images.
1. Configure application [environment variables](#environment-variables)
1. `docker-compose run app npm i` - Install 'node_modules' to your host machine.
1. `docker-compose run app` - Start the app server.
1. `docker-compose run webpack` - Start the webpack server and dashboard.

### Running Scripts
> Because this project uses docker during development any scripts or shell commands need to run from inside the docker container.

```
docker-compose run app <COMMAND>
```

### Environment Variables
Use the `.env` file located in the project's root directory to override any of the defaults defined within `docker-compose.yml`. Place any necessary [secrets](#secrets) within this file.

> Copy the environment template file if it does not already exist

```
cp -n .env.sample .env
```

*You can also prefix docker commands with environment variables. Any variables passed from the CLI will take precedence over those in the `.env` or `docker-compose.yml` files.*

**Available ENV variables:** These environment variables are used by the application at run-time and will need to be configure for the desired environment accordingly. The default values for these environment variables can be found within `/config`.

- APP_ASSETS_PATH
- APP_BASEPATH
- APP_HOSTNAME
- APP_PORT
- NODE_ENV
- WEBPACK_ENABLED
- WEBPACK_HOSTNAME
- WEBPACK_MEASURE
- WEBPACK_PORT
