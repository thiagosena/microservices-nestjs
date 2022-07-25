import * as dotenv from 'dotenv'

dotenv.config()

// database
const { MONGO_URL } = process.env;

export { MONGO_URL }