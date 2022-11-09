const express = require("express");
const planetsRouter = express.Router();
const planetsController = require("./planets.controller");

const { getAllPlanets } = planetsController;

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
