import * as dotenv from 'dotenv'

dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// author
const AUTHOR: string = process.env.AUTHOR || 'Thiago Sena'

// database
const {
   DB_TYPE,
   DB_USER,
   DB_PASS,
   DB_NAME,
   DB_HOST,
   DB_PORT,
   DB_LOGGING
} = process.env;

// typeorm
const enviroment = {
   development: {
      type: DB_TYPE || 'postgres',
      host: DB_HOST || 'localhost',
      port: DB_PORT || 5432,
      username: DB_USER || 'postgres',
      password: DB_PASS || 'admin',
      database: DB_NAME || 'nestjs',

      // We are using migrations, synchronize should be set to false.
      synchronize: false,

      // Run migrations automatically,
      // you can disable this if you prefer running migration manually.
      migrationsRun: true,
      logging: Boolean(DB_LOGGING) || false,
      entities: [
         'dist/**/*.entity{ .ts,.js}'
      ],
      migrations: [
         'dist/config/migrations/**/*{.ts,.js}'
      ]
   },
   testing: {},
   staging: {},
   production: {}
}
const TYPEORM = enviroment[NODE_ENV!]

export {
   TYPEORM
}