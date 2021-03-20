import express, { Response, Request } from "express";
import UsersDataService from "../controllers/users.service";
import { BaseUser, User } from "../models/users.interface";

export const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users = await UsersDataService.getAllUsers();

    if (!users) {
      res.status(404).send("Users not found");
    } else {
      res.status(200).send(users);
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await UsersDataService.getUser(id);
    if (user) {
      user.once(
        "value",
        function (snapshot) {
          res.status(200).send(snapshot.val());
          console.log(snapshot.val());
        },
        function (e) {
          console.log("The read failed: " + e);
        }
      );
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const baseUser: BaseUser = req.body;
    // createdAt = (new Date()).toString();

    const user = { ...baseUser };

    const newUser = await UsersDataService.createUser(user);

    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.put("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const userUpdate: User = req.body;
    console.log("user to update", userUpdate);
    const existingUser = await UsersDataService.getUser(id);

    if (existingUser) {
      const updatedUser = await UsersDataService.updateUser(id, userUpdate);
      return res.status(200).json(updatedUser);
    } else {
      //give not found error
    }
    //const newUser = await UsersDataService.createUser(userUpdate);

    //res.status(201).json(newUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await UsersDataService.deleteUser(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
