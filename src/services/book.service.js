import prisma from '../config/database.js'

export const newBookService = async (title, publicationYear, available, authorId) =>{
    const book = await prisma.book.create({
        data:{
            title,
            publicationYear,
            available,
            authorId
        }
    })

    return book
}

export const listBookService = async (available) =>{
    if(!available){
        const books = prisma.book.findMany()
        return books
    }

    const books = prisma.book.findMany({
        where:{
            available: true
        }
    })
    
    return books
}

export const updateBookService = async(id, title, publicationYear, available) => {
    const book = await prisma.book.update({
        where: {
            id: Number(id)
        },
        data:{
            title,
            publicationYear,
            available
        }
    })
    return book
}

export const deleteBookService = async(id) => {
    const book = await prisma.book.delete({
        where: {
            id: Number(id)
        }
    })
    return book
}