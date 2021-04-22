'use strict'

const express = require('express');

const Candy = require('../models/candy.js');
const candy = new Candy();

const candyRouter = express.Router();

candyRouter.get('/candy', getCandy)
candyRouter.get('/candy/:id', getOneCandy)
candyRouter.post('/candy', createCandy)
candyRouter.put('/candy/:id', updateCandy)
candyRouter.delete('/candy/:id', deleteCandy)

function getCandy(req, res) {
  let getAllCandy = candy.read();
  res.status(200).json(getAllCandy);
}

function getOneCandy(req, res) {
  const id = parseInt(req.params.id);
  let theCandy = candy.read(id);
  res.status(200).json(theCandy);
}

function createCandy(req, res) {
  let content = req.body;
  let createdCandy = candy.create(content);
  res.status(201).json(createdCandy);
}

function updateCandy(req, res) {
  let id = parseInt(req.params.id)
  let data = req.body;
  let updateCandy = candy.update(id,data)
  res.status(200).json(updateCandy)
}

function deleteCandy(req, res) {
  let id = parseInt(req.params.id);
  candy.delete(id)
  res.status(200).json({msg: 'item deleted'})
}

module.exports = candyRouter;