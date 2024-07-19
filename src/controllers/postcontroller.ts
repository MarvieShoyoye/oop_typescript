import { Request, Response } from "express";
import PostModel from "../model/postmodel";

export class PostController {
  constructor() {}

  async create(req: Request, res: Response) {
    const { title, content } = req.body;
      
    const user = await PostModel.create({ title, content });
    return res.status(201).json(user);
  }
}
