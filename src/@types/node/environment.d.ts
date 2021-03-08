declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'

      SECRET_OR_PRIVATE_KEY: string

      DATABASE_TYPE: string
      DATABASE_HOST: string
      DATABASE_PORT: number
      DATABASE_USERNAME: string
      DATABASE_PASSWORD: string
      DATABASE_NAME: string

      PORT: number
    }
  }
}

export {}