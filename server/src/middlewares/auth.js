import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).send({ message: "Usuário não autorizado." });

  const token = authorization.split(" ")[1];

  console.log(token);
  const { id } = jwt.verify(token, process.env.JWT_KEY);

  const user = await User.findById({ _id: id });
  console.log(user);
  if (!user) return res.status(401).send({ message: "Usuário encontrado." });

  const loggedUser = {
    id: user._id,
    name: user.fullname,
    email: user.email,
  };

  req.user = loggedUser;

  next();
};
