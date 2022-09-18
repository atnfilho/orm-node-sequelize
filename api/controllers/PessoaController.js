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

    static async obtemPessoaPorId(req, res) {
        const { id } = req.params;

        try {
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoa);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        console.table(novaPessoa);

        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(201).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
            const pessoaAtualizada = await database.Pessoas.findOne({ where: { id: Number(id) } });
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params;

        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } });
            return res.status(200).json({mensagem: `id ${id} deleteado`});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;