import prisma from '../config/database.js'

export const newAuthorService = async (name) =>{
    const author = await prisma.author.create({
        data:{
           name
        }
    })

    return author
}

export const editAuthorService = async (id,name) =>{
    const author = await prisma.author.update({
        where:{
            id:id
        },
        data:{
           name
        }
    })

    return author
}

export const deleteAuthorService = async (id) =>{
    const author = await prisma.author.delete({
        where:{
            id: id
        }
    })
    return author
}

export const reatriveAuthorService = async (id) =>{
    const author = await prisma.author.findFirst({
        where:{
            id: id
        }
    })

    return author
}


export const listAuthorService = async () =>{
    const author = await prisma.author.findMany()

    return author
}