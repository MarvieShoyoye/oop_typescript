import { Router } from "express";
import { UserController } from "../controllers/usercontroller";

let a; // declaring
a = 1; // assigning

class UserRoutes {
  // memeber/ property declaration
  public router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/home");
    this.router.post("/user", this.userController.create);
  }
}

const userRoutes = new UserRoutes().router;
export default userRoutes;
