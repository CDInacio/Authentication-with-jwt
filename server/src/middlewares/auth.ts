import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import { User } from "../models/User"

interface JwtPayload {
    id: number | string
}

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).send({ message: "Usuário não autorizado." })

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_KEY!) as JwtPayload

    const user = await User.findById({ _id: id })

    if (!user) return res.status(401).send({ message: "Usuário encontrado." })

    const loggedUser = {
        name: user.fullname,
        email: user.email
    }

    req.user = loggedUser

    next()
}