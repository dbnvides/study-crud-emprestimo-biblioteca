import { deleteBookService, listBookService, newBookService, updateBookService } from "../services/book.service.js"

export const newBookController = async(req, res) =>{
    const {title, publicationYear, available, authorId} = req.body

    const book = await newBookService(title, publicationYear, available, authorId)

    return res.status(201).json(book)
}

export const listBookController = async(req, res) =>{
    const {available} = req.query

    const allBooks = await listBookService(available)

    return res.status(200).json(allBooks)
}

export const updateBookController = async(req, res) =>{
    const {id} = req.params
    const {title, publicationYear, available} = req.body

    const book = await updateBookService(id, title, publicationYear, available)

    return res.status(200).json(book)
}

export const deleteBookController = async(req, res) =>{
    const {id} = req.params

    await deleteBookService(id)

    return res.status(200).send({message:"Book is deleted!"})
}