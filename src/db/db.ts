import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class DbConnect {
    private dburl: string; //encapsulation

   constructor() {
    this.dburl = process.env.DBURL || "mongodb_url";
   }
    
    public async connect(): Promise<void>  {
      try {
          await mongoose.connect(this.dburl);
          console.log("Connected to Database");    
      } catch (error) {
          console.log(error);
      }
  } 
}

const dbconnect = new DbConnect(); //ceating an instance for the class
export default dbconnect;