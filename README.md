# spacex-launches

Track previous and upcoming SpaceX launches.

### Table of Contents
* [Local Development Setup](#local-setup)
* [Build Production Assets](#deploy-prod)
* [Managing Dependencies](#managing-dependencies)
* [Tests](#tests)

## Local Development Setup <a name="local-setup"></a>

This app runs entirely on the client, but it uses Docker to start a local server for easier development.

###  Pre-requisites

* Docker

### Build the Docker Image

`$ docker build . -t spacex:latest`

### Start the Container

`$ docker run -it --rm -p 3000:3000 -p 35729:35729 -v $(pwd):/app spacex:latest`

## Build Production Assets <a name="deploy-prod"></a>

```
(host) $ docker run -it --rm -v $(pwd):/app -e "PUBLIC_URL=https://apps.cerivera.com/spacex" spacex:latest yarn build
```

## Managing Dependencies <a name="managing-dependencies"></a>

### Adding/Updating/Removing

Dependencies should be installed/updated/removed from within the Docker container.  The local directory is mounted so that the updated `package.json` and `yarn.lock` files can be added to version control.  After the files are updated, you'll need to rebuild the docker image to update its installed packages.

```
(host)      $ docker run -it --rm -v $(pwd):/app spacex:latest bash
(container) $ yarn add newpackage@^1.2.0
(container) $ exit
(host)      $ docker build . -t spacex:latest
```

## Tests <a name="tests"></a>

`$ docker run -it --rm spacex:latest yarn run test`
