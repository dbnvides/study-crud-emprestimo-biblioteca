import prisma from '../config/database.js'
import dayjs from 'dayjs';

export const loanService = async(bookId, userId) =>{
    const loanDate = new Date();
    const returnDate = dayjs(loanDate).add(7, 'day').toDate();

    const loan = await prisma.loan.create({
        data:{
            bookId: Number(bookId),
            userId: Number(userId),
            returnDate: returnDate,
            returned: false
        }
    })

    const book = await prisma.book.update({
        where:{
            id: Number(bookId)
        },
        data:{
            available: false
        }
    })

    return loan
}

export const returnLoanService = async(bookId,userId) =>{
    const bookIdNum = Number(bookId);
    const userIdNum = Number(userId);

    const [_, __, returnedLoan] = await prisma.$transaction([
        prisma.book.update({
          where: { id: bookIdNum },
          data: { available: true },
        }),
        prisma.loan.updateMany({
          where: {
            bookId: bookIdNum,
            userId: userIdNum,
            returned: false,
          },
          data: {
            returned: true,
          },
        }),
        prisma.loan.findFirst({
          where: {
            bookId: bookIdNum,
            userId: userIdNum,
            returned: true,
          },
          orderBy: {
            loanDate: 'desc', // garante que você pega o mais recente, se houver mais de um
          },
        }),
      ]);
    
      return returnedLoan;
  
}