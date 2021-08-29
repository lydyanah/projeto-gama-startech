import * as Yup from "yup";

const candidateValidation = Yup.object().shape({
  nome: Yup.string()
    .matches(
      /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/,
      "Por favor, preencha um nome válido"
    )
    .max(40, "Máximo de 40 caracteres")
    .required("Digite seu nome completo"),
  cargo: Yup.string()
    .matches(
      /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/,
      "Por favor, preencha um cargo válido"
    )
    .required("Digite sua profissão"),
  dataNascimento: Yup.string()
    .nullable()
    .required("Preencha sua data de nascimento"),
  cep: Yup.number().typeError("Somente números").required("Digite seu CEP"),
  logradouro: Yup.string().required("Digite seu endereço"),
  bairro: Yup.string().required("Digite seu endereço"),
  cidade: Yup.string().required("Digite a cidade"),
  uf: Yup.string()
    .max(2, "Máximo de 2 caracteres")
    .matches(/^[a-zA-Z]+$/, "Somente letras")
    .required("Digite o estado"),
  numero: Yup.string().max(5, "Máximo de 5 caracteres").required("Digite o nº"),
  celular: Yup.number()
    .typeError("Somente números")
    .required("Digite seu nº de celular"),
  email: Yup.string().required("Digite seu e-mail").email("Formato inválido"),
  telefone1: Yup.number().typeError("Somente números"),
  telefone2: Yup.number().typeError("Somente números"),
  contato: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Somente letras")
    .max(40, "Máximo de 40 caracteres"),
  identidade: Yup.number().typeError("Somente números"),
  cpf: Yup.string()
    .test("cpf", "CPF Inválido", (value) => validaCPF(value))
    .required("Digite seu CPF"),
  categoria: Yup.string()
    .matches(/^[a-zA-Z]+$/, "Somente letras")
    .max(3, "Máximo 3 caracteres")
    .matches(/^[a-zA-Z]+$/, "Somente letras"),
});

const validaCPF = (cpf: any) => {
  let numeros, digitos, soma, i, resultado, digitos_iguais;
  digitos_iguais = 1;

  if (undefined === cpf) {
    return true;
  }

  if (cpf.length < 11) {
    return false;
  }

  for (i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      digitos_iguais = 0;
      break;
    }
  }

  if (!digitos_iguais) {
    numeros = cpf.substring(0, 9);
    digitos = cpf.substring(9);
    soma = 0;

    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
      return false;
    }

    numeros = cpf.substring(0, 10);
    soma = 0;

    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

export default candidateValidation;
