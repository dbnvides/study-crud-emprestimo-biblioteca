import { loanService, returnLoanService } from "../services/loan.service.js"

export const loanController = async(req, res) =>{
    const {bookId, userId } = req.body

    const loan = await loanService(bookId, userId)

    return res.status(200).json(loan)
}

export const returnLoanController = async(req,res) =>{
    const {bookId, userId } = req.body

    const loan = await returnLoanService(bookId, userId)

    return res.status(200).json(loan)
}