const express = require("express");
const router = express.Router();

const estacionamento = require("./controllers/tarefas.controller.js");

router.get("/", estacionamento.mostrarCarros);

router.post("/criar", estacionamento.criarCarro);

router.get("/deletar/:ordem", estacionamento.deletarCarro);

module.exports = router;