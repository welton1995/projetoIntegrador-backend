const Entrada = require('../models/Entrada');
const Matricula = require('../models/Matricula');

const entradaController = {
  async listar(req, res) {
    try {
      const entradas = await Entrada.find({});
      
      res.status(200).send({ entradas });
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async listarData(req, res) {
    try {
      const { inicio, fim } = req.body;
      const entradas = await Entrada.find({
        data: {
          $gte: inicio, // $gte significa "greater than or equal to" (maior ou igual a)
          $lte: fim     // $lte significa "less than or equal to" (menor ou igual a)
        }
      });

      res.status(200).json( entradas );
      
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async listarSemana(req, res) {
    try {
      const semana = new Date(); // Data atual
      semana.setDate(semana.getDate() - 7); // Subtrai 7 dias da data atual

      const entradas = await Entrada.find({   
        data: { $gte: semana, $lte: new Date() } // Pesquisa por registros dentro da última semana
        });

        res.status(200).json(entradas);
    } catch (error) {
      console.log(error);
    }
  },

  async listarMes(req, res) {
    try {
      const mes = new Date(); // Data atual
      mes.setDate(mes.getDate() - 30); // Subtrai 1 mes da data atual
      const entradas = await Entrada.find({   
        data: { $gte: mes, $lte: new Date() } // Pesquisa por registros dentro do ultimo mes
        });

        res.status(200).json(entradas);
    } catch (error) {
      console.log(error);
    }
  },

  async cadastrar(req, res) {
    try {
      const { matricula, data, observacao } = req.body;
      const matriculaExiste = await Matricula.findOne({matricula});

      if(!matriculaExiste) {
        console.log(matriculaExiste)
        return res.status(400).json(`Matrícula não cadastrada!`);
      }

      await Entrada.create({ matricula, data, observacao });

      res.status(201).json('Matrícula cadastrada com sucesso!');
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { data, observacao } = req.body;

      const userExist = await Entrada.findById(id, { data, observacao });

      if(!userExist){
       return res.status(400).json(`Matrícula não encontrada!`);
      }
      
      await Entrada.findByIdAndUpdate(id, req.body);

      res.status(200).json(`Registro atualizado com sucesso!`);
    } catch (error) {
      console.error(error);
      res.status(400).json("Falha ao atualizar usuário");
    }
  },

  async remover(req, res) {
    try {
       const { id } = req.params;
       const userExist = await Entrada.findById(id);

       if(!userExist){
        return res.status(400).json(`Registro não encontrado!`);
       }
       await Entrada.findByIdAndDelete(id);

       return res.status(200).json(`Registro removido com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(400).json(`Falha ao remover registro tente novamnte!`);
    }
}
}

module.exports = entradaController;