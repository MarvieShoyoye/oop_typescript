import { Router } from "express";
import { PostController } from "../controllers/postcontroller";

let a; // declaring
a = 1; // assigning

class PostRoutes {
  // memeber/ property declaration
  public router: Router;
  private postController: PostController;

  constructor() {
    this.router = Router();
    this.postController = new PostController();
    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/home");
    this.router.post("/user", this.postController.create);
  }
}

const postRoutes = new PostRoutes().router;
export default postRoutes;
