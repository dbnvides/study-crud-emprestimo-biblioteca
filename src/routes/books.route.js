import { Router } from "express";
import { deleteBookController, listBookController, newBookController, updateBookController } from "../controllers/book.controller.js";

const bookRouter = Router()

bookRouter.get('/', listBookController)
bookRouter.post('/', newBookController)
bookRouter.patch('/:id', updateBookController)
bookRouter.delete('/:id', deleteBookController)


export default bookRouter