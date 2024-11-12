const db = require("./connection");
//const {insertParks, insertFoods}  = require("./utils/insertDB")
const { createParks, createRides, createStalls, createFoods, createFoodStalls} = require("./utils/createDB");
const { formatParks, formatRides, formatStalls,  formatFoods} = require("./utils/formatDB");


async function seed() {
  // ---------- DROP AND CREATE DATA
  await Promise.all([createParks(), createFoods()])
  await Promise.all([createRides(), createStalls()])
  await createFoodStalls()
  // ---------- INSERT DATA
  await Promise.all([formatParks(), formatFoods()])
  await Promise.all ([formatRides(), formatStalls()])
  // // 
};













module.exports = seed;