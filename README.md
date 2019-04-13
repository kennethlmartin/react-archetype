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
- **[Deployment](#deployment)**
  - [Manually Build Docker Image](#manually-build-docker-image)

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
1. `docker-compose run --service-ports --use-aliases --rm app` - Start the app server.
1. `docker-compose run --service-ports --use-aliases --rm webpack` - Start the webpack server with dashboard.

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

**Available ENV variables:** These environment variables are used by the application at run-time and will need to be configured for the desired environment accordingly. The default values for these environment variables can be found within `/config`.

- **APP_ASSETS_PATH** - Relative URL path to asset files
- **APP_BASEPATH** - Root URL path of the app
- **APP_HOSTNAME** - Hostname for application
- **APP_PORT** - Application origin in format of protocol://hostname
- **NODE_ENV** - Application environment
- **WEBPACK_ENABLED** - Whether to use Webpack for application assets
- **WEBPACK_HOSTNAME** - Webpack origin in format of protocol://hostname
- **WEBPACK_MEASURE** - Whether to display webpack speed measuring
- **WEBPACK_PORT** - Webpack server port

## Deployment
[ADD DEPLOYMENT DESCRIPTION HERE]

#### Manually Build Docker Image
To manually build the docker image from your local host machine run the following commands.
```
docker build -t <IMAGE_NAME> .
```
