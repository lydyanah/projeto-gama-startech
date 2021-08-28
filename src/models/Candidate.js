const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: false},
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNascimento: { type: Date, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    telefone1: { type: String, unique: false, required: false },
    telefone2: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    identidade: { type: String, unique: false, required: false },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
    categoria: { type: String, unique: false, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);