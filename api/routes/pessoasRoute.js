const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
    .get('/pessoas', PessoaController.obtemListaDePessoas)
    .get('/pessoas/:id', PessoaController.obtemPessoaPorId)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)
    .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteId/matriculas', PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deletaMatricula)
    .post('/pessoas/:estudanteId/matriculas/:matriculaId/restaura', PessoaController.restauraMatricula);

module.exports = router;