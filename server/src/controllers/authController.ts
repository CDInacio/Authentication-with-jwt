import { Request, Response } from "express";

import { User } from "../models/User";
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'


export class AuthController {
  async signup(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (user)
        return res.status(400).send({ message: "Usuário já cadastrado." });

      user = new User({
        fullname: name,
        email: email,
        password: password,
      });

      await user.save()

      return res.status(200).send({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      return res.status(500).send({ message: "Error de servidor" });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (!user)
        return res.status(400).send({ message: "Email ou senha incorretos!" });

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch)
        return res.status(400).send({ message: "Email ou senha incorretos!" });

      const token = jwt.sign({ id: user.id }, process.env.JWT_KEY!, {
        expiresIn: '1d'
      })

      const loggedUser = {
        name: user.fullname,
        email: user.email
      }

      return res.status(200).send({ user: loggedUser, token });
    } catch (error) {
      return res.status(500).send({ message: "Error de servidor" });
    }
  }

  async getUserInfo(req: Request, res: Response) {
    const loggedUser = req.user

    res.status(200).send(loggedUser)
  }
}

