<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://docs.nestjs.com/assets/logo-small.svg" width="96" alt="Nest Logo" /></a>
  <a href="https://nextjs.org/" target="blank"><img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" width="96" alt="Next Logo" /></a>
</p>
<h2 align="center">Team 1 - Mini Project 2024 </h2>

## Current project team members

- [er-vutk](https://github.com/er-vutk) -
  **Trần Kim Vũ** <<vutk@tech.est-rouge.com>>
- [er-vinhntt](https://github.com/er-vinhntt) -
  **Nguyễn Trọng Thanh Vinh** <<vinhntt@tech.est-rouge.com>>
- [er-anhlnt](https://github.com/er-anhlnt) -
  **Lê Nguyễn Tiến Anh** <<anhlnt@tech.est-rouge.com>>

## Installation

```bash
$ npm install
$ echo "UID = $(id -u)" >> ./path-to-your_env-file
$ echo "GID = $(id -g)" >> ./path-to-your_env-file
```

Create two .env files: .env.development and .env.production in the format of .env.sample.

## Running the app

```bash
# watch mode
$ npm run compose:dev

# production mode
$ npm run compose:prod
```

## Migration

```bash
# Generate migration files with schema changes you made
$ npm run migrate:generate -name=create_user # {TIMESTAMPT}-create_user.ts

# create a new migration
$ npm run migrate:create -name=create_user # {TIMESTAMPT}-create_user.ts

# Once you have a migration to run on production,using this CLI command:
$ npm run migrate:run

# If for some reason you want to revert the changes, you can run:
$ npm run migrate:revert
```

## Database seeding

```bash
$ npm run seed:create -name=user
$ npm run seed:run
```

> **Note:** The seed files will be processed in alphabetical order based on their filenames. So, please ensure that they are numbered to maintain their sequence.

## Set ownership of all a folder's subfolders and files (linux)

```bash
$ ls -a
drwxr-xr-x   8 root       root         4096 Jan 21 09:59 dist

$ npm run chown
drwxr-xr-x   8 er-vinhntt er-vinhntt   4096 Jan 21 10:00 dist
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
