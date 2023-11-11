# Monkey App Clone

This project is a minimal clone of the Monkey App, a social media app that allows users to chat with random people. It uses a variety of technologies including ReactJS for the frontend, Redux Toolkit for state management, PeerJS for WebRTC, React useWebSocket, BunJS for the backend, and Docker for containerization and orchestration.

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Running the App](#running-the-app)
  - [Using BunJS](#using-bunjs)
  - [Using Docker Compose](#using-docker-compose)
- [Contributing](#contributing)
- [License](#license)

## Description

The Monkey App Clone is a project that aims to replicate the functionality of the Monkey App. It allows users to engage in video chats using WebRTC technology. It also allows users to send text messages to each other using WebRTC DataChannel. The app is built using ReactJS for the frontend, Redux Toolkit for state management, PeerJS for WebRTC, React useWebSocket, BunJS for the backend, and Docker for containerization and orchestration.

## Technologies Used

- [ReactJS](https://reactjs.org) (Frontend)
- [Redux Toolkit](https://redux.js.org) (State Management)
- [PeerJS](https://peerjs.com) (WebRTC)
- [React useWebSocket](https://www.npmjs.com/package/react-use-websocket) (WebSockets)
- [BunJS](https://bun.sh) (Backend)
- [Docker](https://www.docker.com) (Containerization)
- [Docker Compose](https://docs.docker.com/compose) (Container Orchestration)

## Prerequisites

Before running the app, ensure that BunJS is installed on your machine. Installation instructions can be found [here](https://bun.sh/docs/installation). If you are unable to install BunJS, you can use the Docker Compose file to run the app with Docker.

## Running the app

- Clone the repository

```bash
git clone https://github.com/misterneo/monkey-app-clone.git
cd monkey-app-clone
```

### Using BunJS

#### Running the backend

- Go to the `server` directory

```
cd server
```

- Install the dependencies

```bash
bun install
```

- Run the app

```bash
bun run index.ts
```

This will start a WebSocket and HTTP server on port 3000.

Optionally:

> You can Specify the port using the `--port` flag, e.g., `bun run index.ts --port 5000`. Enable debug mode using `--debug` flag, e.g., `bun run index.ts --debug`.

> If you decide to change the default port, You will need to update the `SERVER_PORT` constant in `client/src/utils/constants.js` to the backend server port. Default is set to `3000`.

#### Running the frontend

- Go to the `client` directory

```bash
cd client
```

- Install the dependencies

```bash
bun install
```

- Run the app

```bash
bun run dev
```

This will start the app on port 5173. Navigate to `http://localhost:5173` to view the app.

### Using Docker Compose

- Run the following command at the root of the project to start the app:

```bash
docker compose up -d --build
```

Wait for the app to start. This may take a few minutes the first time you run the command.

Navigate to `http://localhost:5173` to view the app.

- To stop the app, run the following command:

```bash
docker compose down
```

## Contributing

Contributions are welcome. Feel free to open a pull request or submit an issue.

## License

This project is licensed under the MIT license. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for more details.
