import prisma from '../config/database.js'

export const newUserService = async (name, email) =>{
    const user = await prisma.user.create({
        data:{
            name,
            email
        }
    })

    return user
}

export const listUserService = async () =>{
    const users = prisma.user.findMany()
    return users
}

export const updateUserService = async(name, email) => {
    const user = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data:{
            name, 
            email
        }
    })
    return user
}

export const deleteUserService = async(id) => {
    const user = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    })
    return user
}

export const reatriveUserService = async (id) =>{
    const user = await prisma.user.findFirst({
        where:{
            id: Number(id)
        }
    })

    return user
}
