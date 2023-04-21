"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        const existingUser = yield User.findOne({ email: email });
        if (existingUser)
            return res
                .status(400)
                .send({ message: "Email já em uso, por favor informe outro." });
        yield User.create({
            fullname: name,
            email: email,
            password: password,
        });
        return res.status(200).send({ message: "Usuário criado com sucesso!" });
    }
    catch (error) {
        return res.status(500).send({ message: "Error de servidor" });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield User.findOne({ email: email });
        if (!user)
            return res.status(400).send({ message: "Usuário não cadastrado!" });
        const passwordMatch = yield bcrypt.compare(password, user.password);
        if (!passwordMatch)
            return res.status(400).send({ message: "Email e/ou senha incorretos!" });
        return res.status(200).send({ email: user.email });
    }
    catch (error) {
        return res.status(500).send({ message: "Error de servidor" });
    }
});
exports.login = login;
