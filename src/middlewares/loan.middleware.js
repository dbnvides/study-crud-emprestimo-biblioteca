import prisma from '../config/database.js'

export const ensureBookAvailable = async (req, res, next) =>{
    const {bookId} = req.body
    
    const book = await prisma.book.findFirst({
        where:{
            id: bookId
        }
    })

    if(!book){
        return res.status(400).json({message: "Book is not exist!"})
    }
    if(!book.available){
        return res.status(400).json({message: "Book is not available!"})
    }

    return next()
}


export const ensureUserIsAvailable =async (req, res, next) =>{
    const {userId} = req.body
    const user = await prisma.loan.findMany({
        where:{
            userId: userId
        }
    })

    if(user.length >= 3){
        return res.status(400).json({message: "Maximum book allocated, please return a book to continue!"})
    }

    return next()

}


