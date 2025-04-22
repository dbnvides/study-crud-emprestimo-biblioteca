import { deleteAuthorService, editAuthorService, newAuthorService, reatriveAuthorService } from "../services/author.service.js"

export const newAuthorController = async(req, res) =>{
    const {name} = req.body

    const author = await newAuthorService(name)

    return res.status(201).json(author)
}

export const editAuthorController = async(req, res) =>{
    const {name} = req.body
    const {id} = req.params
    const author = await editAuthorService(id,name)

    return res.status(201).json(author)
}

export const deleteAuthorController = async(req, res) =>{
    const {id} = req.params
    await deleteAuthorService(id)

    return res.status(201).send({message: "Author are deleted with success!"})
}


export const reatriveAuthorController = async(req, res) =>{
    const {id} = req.params
    const author = await reatriveAuthorService(id)

    return res.status(201).json(author)
}