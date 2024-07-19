import { Request, Response } from "express";
import UserModel from "../model/usermodel";

export class UserController {
  constructor() {}

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    // const user = new UserModel({ name, email });
    // await user.save();

    const user = await UserModel.create({ name, email, password });
    return res.status(201).json(user);
  }
}
