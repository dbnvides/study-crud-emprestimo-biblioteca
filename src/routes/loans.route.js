import { Router } from "express";
import { ensureBookAvailable, ensureUserIsAvailable } from "../middlewares/loan.middleware.js";
import { loanController, returnLoanController } from "../controllers/loan.controller.js";
import { ensureUserExist } from "../middlewares/user.middleware.js";

const loanRouter = Router()

loanRouter.post('/', ensureBookAvailable, ensureUserExist, ensureUserIsAvailable,loanController)
loanRouter.patch('/returned', ensureUserExist, returnLoanController)


export default loanRouter