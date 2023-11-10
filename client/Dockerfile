FROM oven/bun:latest as client

WORKDIR /app

COPY bun.lockb .
COPY package.json .
RUN bun install

COPY . .

RUN bun run build

FROM nginx:latest

COPY --from=client /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]