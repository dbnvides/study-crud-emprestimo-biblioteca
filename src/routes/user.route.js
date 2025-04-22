import { Router } from "express";
import { deleteUserController, editUserController, newUserController, reatriveUserController } from "../controllers/user.controller.js";
import { emailExist } from "../middlewares/user.middleware.js";

const userRouter = Router()

userRouter.get('/:id', reatriveUserController)
userRouter.post('/', emailExist, newUserController)
userRouter.patch('/:id', emailExist, editUserController)
userRouter.delete('/:id', deleteUserController)

export default userRouter