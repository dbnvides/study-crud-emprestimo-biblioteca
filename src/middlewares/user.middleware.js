import prisma from '../config/database.js'

export const emailExist = async (req, res, next) =>{
    const {id} = req.params
    const {email} = req.body
    
    if(id){
        const isValid = await prisma.user.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!isValid){
            return next()
        }
    }

    const isValid = await prisma.user.findFirst({
        where:{
            email: email
        }
    })

    if(!isValid){
        return next()
    }

    return res.status(400).json({message: "Email already exist!"})
}