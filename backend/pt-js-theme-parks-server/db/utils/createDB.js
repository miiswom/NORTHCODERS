const db = require("../connection")

async function createParks() {
  await db.query(`DROP TABLE IF EXISTS parks CASCADE;`);
  await db.query(`CREATE TABLE parks (
                    park_id SERIAL PRIMARY KEY,
                    park_name VARCHAR NOT NULL,
                    year_opened INTEGER NOT NULL,
                    annual_attendance INTEGER NOT NULL); \n`)
};

async function createRides() {
  await db.query(`DROP TABLE IF EXISTS rides;`);
  await db.query(`CREATE TABLE rides (
                    ride_id SERIAL PRIMARY KEY,
                    ride_name VARCHAR NOT NULL,
                    year_opened INTEGER NOT NULL,
                    votes INTEGER,
                    park_id INT NOT NULL REFERENCES parks(park_id)); \n`)
};

async function createStalls() {
  await db.query(`DROP TABLE IF EXISTS stalls CASCADE;`);
  await db.query(`CREATE TABLE stalls (
                    stall_id SERIAL PRIMARY KEY,
                    stall_name VARCHAR NOT NULL,
                    park_id INTEGER NOT NULL REFERENCES parks(park_id)); \n`)
};

async function createFoods() {
  await db.query(`DROP TABLE IF EXISTS foods CASCADE;`);
  await db.query(`CREATE TABLE foods(
                    food_id SERIAL PRIMARY KEY,
                    food_name VARCHAR NOT NULL,
                    vegan_option VARCHAR NOT NULL);`)
}

async function createFoodStalls() {
  await db.query(`DROP TABLE IF EXISTS foods_stalls;`);
  await db.query(`CREATE TABLE foods_stalls (
                    food_id INTEGER NOT NULL REFERENCES foods(food_id),
                    stall_id INTEGER NOT NULL REFERENCES stalls(stall_id));`)
}

module.exports = { createParks, createRides, createStalls, createFoods, createFoodStalls }