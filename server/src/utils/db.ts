import mongoose from "mongoose";

export default async function ConnectDB(){
     try {
          const res = await mongoose.connect(process.env.DATABASE_URL || "")
          if(res) console.log(`DB is connected to: ${res.connection.host}`)
     } catch (error: any) {
          console.log("Error while connecting the database: ", error.message)
     }
}