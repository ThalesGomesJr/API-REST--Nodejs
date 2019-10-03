const express = require("express");

const routes = express.Router();

const FuncionarioController = require('./controllers/FuncionarioController');

routes.get("/funcionarios", FuncionarioController.index);
routes.get("/funcionario/:id", FuncionarioController.show);
routes.post("/cadastro", FuncionarioController.store);
routes.put("/atualizacadastro/:id", FuncionarioController.update);
routes.delete("/deletar/:id", FuncionarioController.delete);


module.exports = routes;