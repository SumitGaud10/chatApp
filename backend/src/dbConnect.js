import mongoose from "mongoose"
import environment from "./enviroment.js"
import {MongoClient} from "mongodb"

async function dbConnect(){
    try {
        const connection = await mongoose.connect(environment.mongodbUri)
        return connection
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export const dbclient = new MongoClient(environment.mongodbUri)

export default dbConnect