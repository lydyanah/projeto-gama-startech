const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, dataNascimento, estadoCivil, genero, cep, logradouro, numero, bairro, cidade, uf, celular, email, telefone1, telefone2, contato, identidade, cpf, veiculo, habilitacao, categoria } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.contato = contato;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;
        newCandidate.categoria = categoria;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro interno no servidor');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};