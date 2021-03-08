
# Getting started
## **Description**

Project using Typescript, TypeORM and Auth JWT

## **Installation**

```bash
$ yarn install
```

## **Set envs** 
`.env`

**Example:**
```bash
SECRET_OR_PRIVATE_KEY=secret

DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=root
DATABASE_NAME=tsauth

PORT=3333
```

## **Running migration**
```bash
$ yarn run typeorm migration:run
```

## **Running the app**

```bash
# **development**
$ yarn dev
```