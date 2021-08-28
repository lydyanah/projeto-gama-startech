import * as Yup from "yup";

const candidateValidation = Yup.object().shape({
    nome: Yup.string()
        .matches(/^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/, 'Por favor, preencha um nome válido')
        .max(40, 'Máximo de 40 caracteres')
        .required('Digite seu nome completo'),
    cargo: Yup.string().required('Digite sua profissão'),
    dataNascimento: Yup.string().nullable().required('Preencha sua data de nascimento'),
    cep: Yup.number().required('Digite seu CEP'),
    numero: Yup.number().required('Digite o nº'),
    celular: Yup.number().required('Digite seu nº de celular'),
    email: Yup.string().required('Digite seu e-mail').email('Formato inválido'),
    cpf: Yup.number().required('Digite seu CPF')
});

export default candidateValidation;
