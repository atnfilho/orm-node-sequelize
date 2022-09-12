const database = require('../models');

class PessoaController {
    static async obtemListaDePessoas(req, res) {
        try {
            const listaDePessoas = await database.Pessoas.findAll();
            return res.status(200).json(listaDePessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;