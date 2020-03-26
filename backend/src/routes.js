const express = require('express');

const OngController = require('./constrollers/OngController');
const IncidentController = require('./constrollers/IncidentController');
const ProfileController = require('./constrollers/ProfileController');
const SessionController = require('./constrollers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create); //POST: Criar

routes.get('/ongs', OngController.index); //GET: Lista
routes.post('/ongs', OngController.create); //POST: Criar

routes.get('/profile', ProfileController.index); //GET: Lista

routes.get('/incidents', IncidentController.index); //GET: Lista
routes.post('/incidents', IncidentController.create); //POST: Criar
routes.delete('/incidents/:id', IncidentController.delete) //DELETE: Deletar

module.exports = routes;