import * as yup from "yup";

export const loginSchema = yup
    .object({
        email: yup
            .string()
            .email("Informe um email válido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .required("Campo obrigatório")
            .min(8, "A senha precisa ter no mínimo 8 caracteres"),

    })
    .required();

export const signupSchema = yup
    .object({
        fullname: yup.string().required("Campo obrigatório"),
        email: yup
            .string()
            .email("Informe um email válido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .required("Campo obrigatório")
            .min(8, "A senha precisa ter no mínimo 8 caracteres"),
        // confirmPassword: yup
        //     .string()
        //     .required("Campo obrigatório")
        //     .oneOf([yup.ref("password")], "Senhas diferentes"),
    })
    .required();

export const taskSchema = yup.object({
    title: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
    status: yup.string().required('Campo obrigatório')
})