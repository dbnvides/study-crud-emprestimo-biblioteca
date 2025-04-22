import { Router } from "express";
import { deleteAuthorController, editAuthorController, newAuthorController, reatriveAuthorController } from "../controllers/author.controller.js";
import { listBookController } from "../controllers/book.controller.js";

const authorRouter = Router()

authorRouter.get('/', listBookController)
authorRouter.get('/:id', reatriveAuthorController)
authorRouter.post('/', newAuthorController)
authorRouter.patch('/:id', editAuthorController)
authorRouter.delete('/:id', deleteAuthorController)



export default authorRouter