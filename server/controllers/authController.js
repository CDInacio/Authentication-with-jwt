const User = require("../models/User");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) throw new Error("Usuário já cadastrado");

    const newUser = await User.create({
      fullname: name,
      email: email,
      password: password,
    });
    res.status(200).send({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) throw new Error("Usuário não cadastrado");

    res.status(200).send({ email: existingUser.email });
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
