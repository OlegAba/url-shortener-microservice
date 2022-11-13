# URL Shortener Microservice
[Live Server Example](https://url-shortener-microservice.fly.dev/)

## Installation
We use [NPM](https://www.npmjs.com/get-npm) for our dependency manager. This should be installed before continuing.

To access the project, run the following:
```
git clone --recursive https://github.com/OlegAba/url-shortener-microservice.git
cd url-shortener-microservice
npm run install-all
```

Create a `.env` file in `url-shortener-microservice/server/` and add your MongoDB connection URL.
```
PORT=8080
CONNECTION_URL=<MONGODB CONNECTION URL>
```

## Docker
Build and run the container locally
```
docker build . -t url-shortener-microservice
docker run -dp 8080:8080 url-shortener-microservice
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/OlegAba/url-shortener-microservice/blob/main/LICENSE) file for details.