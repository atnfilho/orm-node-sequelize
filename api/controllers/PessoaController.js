const database = require('../models');

class PessoaController {

    static async obtemTodasAsPessoas(req, res) {
        try {
            const listaDePessoas = await database.Pessoas.scope('todos').findAll();
            return res.status(200).json(listaDePessoas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async obtemPessoasAtivas(req, res) {
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
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraPessoa(req, res) {
        const { id } = req.params;

        try {
            await database.Pessoas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(matricula);
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(201).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;

        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            const matriculaAtualizada = await database.Matriculas.findOne({ where: { id: Number(matriculaId) } });
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } });
            return res.status(200).json({ message: `id ${matriculaId} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const matricula = await database.Matriculas.resore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} restaurado` });
        } catch (error) {
            return res.status(500).json(erro.message);
        }
    }
}

module.exports = PessoaController;