import { deleteUserService, newUserService, reatriveUserService, updateUserService } from "../services/user.service.js"


export const newUserController = async(req, res) =>{
    const {name, email} = req.body

    const user = await newUserService(name,email)

    return res.status(201).json(user)
}

export const editUserController = async(req, res) =>{
    const {name, email} = req.body
    const {id} = req.params
    const user = await updateUserService(id,name,email)

    return res.status(201).json(user)
}

export const deleteUserController = async(req, res) =>{
    const {id} = req.params
    await deleteUserService(id)

    return res.status(201).send({message: "User are deleted with success!"})
}


export const reatriveUserController = async(req, res) =>{
    const {id} = req.params
    const user = await reatriveUserService(id)

    return res.status(201).json(user)
}