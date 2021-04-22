'use strict'

const express = require('express');

const Food = require('../models/food.js');
const food = new Food();

const foodRouter = express.Router();

foodRouter.get('/food', getFood)
foodRouter.get('/food/:id', getOneFood)
foodRouter.post('/food', createFood)
foodRouter.put('/food/:id', updateFood)
foodRouter.delete('/food/:id', deleteFood)

function getFood(req, res) {
  let getAllFood = food.read();
  res.status(200).json(getAllFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = food.read(id);
  res.status(200).json(theFood);
}

function createFood(req, res) {
  let content = req.body;
  let createdFood = food.create(content);
  res.status(201).json(createdFood);
}

function updateFood(req, res) {
  let id = parseInt(req.params.id)
  let data = req.body;
  let updateFood = food.update(id,data)
  res.status(200).json(updateFood)
}

function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  food.delete(id)
  res.status(200).json({msg: 'item deleted'})
}

module.exports = foodRouter;