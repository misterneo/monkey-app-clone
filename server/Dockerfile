FROM oven/bun:latest as server

WORKDIR /app

COPY bun.lockb .
COPY package.json .
RUN bun install --frozen-lockfile

COPY . .

CMD ["bun", "index.ts"]
