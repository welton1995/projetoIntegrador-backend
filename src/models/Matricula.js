const mongoose = require('mongoose');

const matriculaSchema = new mongoose.Schema({
  nome: { 
    type: String,
    required: true
  },
  rg: { 
    type: String,
    required: true,
    unique: true,
    max: 9
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
    max: 11
  },
  matricula: {
    type: String,
    required: true,
  },
});
const Matricula = mongoose.model("Matricula", matriculaSchema);
module.exports = Matricula;