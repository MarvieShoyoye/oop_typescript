import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import helmet from "helmet";
import dbconnect from "./db/db";
import userRoutes from "./routes/userroutes"; 
import postRoutes from "./routes/postroutes";

class App {
    //members
    public app: express.Application;
    public port: string | number;


    //initializer
    constructor() {
        this.app = express();
        this.port = 3000;
        this.connectToDb();
        this.config();
        this.appRoutes();
    }

    //connect to db
    private async connectToDb() {
        await dbconnect.connect();
    }
    
    //configuration
    private config() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(helmet());
    }

    //routes 
    private appRoutes() {
        this.app.use("/api/users", userRoutes);
        this.app.use("/api/posts", postRoutes);
    }

    //server listening 
    public serverListening(): void {
        this.app.listen(this.port, () => {
            console.log(`server running on ${this.port}`)
        });
    }
}

const server = new App();
server.serverListening();