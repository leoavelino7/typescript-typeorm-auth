import dotenv from 'dotenv'

dotenv.config()

const {
  DATABASE_TYPE,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env

export default {
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [
    "src/app/models/**/*.ts"
  ],
  migrations: [
    "src/database/migrations/**/*.ts"
  ],
  cli: {
    "migrationsDir": "src/database/migrations"
  }
}