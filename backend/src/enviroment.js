import dotenv from 'dotenv'

dotenv.config()

const environment = {
    mongodbUri: process.env.MONGODB_URI 
}

export default environment