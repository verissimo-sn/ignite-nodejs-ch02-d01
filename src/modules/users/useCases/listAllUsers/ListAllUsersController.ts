import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = <string>request.headers.user_id;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.send(users);
    } catch (error) {
      return response.status(404).json({ error });
    }
  }
}

export { ListAllUsersController };
