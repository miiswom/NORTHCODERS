const db = require("../connection");
const format = require("pg-format");
const {parks, rides, stalls, foods} = require("../data/index");

exports.formatParks = () => {
  const formattedParks = parks.map((park) => 
    [park.park_name, park.year_opened, park.annual_attendance]);
  return db.query(format(`INSERT INTO parks (park_name, year_opened, annual_attendance) VALUES %L;`, formattedParks));

};

exports.formatRides = () => {
  const formattedRides = rides.map((ride) => [
    ride.ride_name,
    ride.year_opened,
    ride.votes,
    findParksId(ride)[0]
  ]);
  return db.query(format(`INSERT INTO rides (ride_name, year_opened, votes, park_id) VALUES %L;`, formattedRides));
};

exports.formatStalls = () => {
  const formattedStalls = stalls.map((stall) => [
    stall.stall_name,
    findParksId(stall)[0],
  ]);
  return db.query(format(`INSERT INTO stalls (stall_name, park_id) VALUES %L;`, formattedStalls));
};



exports.formatFoods = () => {
  const formattedFoods = foods.map((food) => [food.food_name, food.vegan_option]);
  return db.query(format(`INSERT INTO foods (food_name, vegan_option) VALUES %L;`, formattedFoods));
};

function findParksId(data) {
  const parksIds = parks.map((park, index) => [index + 1, park.park_name]);
  const id = parksIds.find((park) => data.park_name === park[1]);
  return id; 
};

const foodsDB = findFoodsId(foods);

function findStallsId(data) {
  const stallsId = stalls.map((stall, index) => [index + 1, stall.stall_name, stall.foods_served]); 
  stallsId.forEach((stall) => {
    if(foodsDB.includes(stall.foods_served)) {
      console.log(stall[0])
    }
  })
  // console.log(stallsId)
  //const id = stallsId.find((stall) => data.food_name_name === stall[2]);
  // return id;
  //return db.query(format(`INSERT INTO foods (food_id) VALUES %L;`, formattedFoods));
};

findStallsId()

function findFoodsId(data) {
  const foodsArr = foods.map((food, index) => [index + 1, food.food_name]); 
  // console.log(foodsId)
  // const ids = foodsArr.find((food) => foods.food_name === food);
  // console.log("test  ", ids)
  return foodsArr;
  //return db.query(format(`INSERT INTO foods (food_id) VALUES %L;`, formattedFoods));
};

//console.log(foodsDB[1]);

//  
//findStallsId(stalls);
  // const foodsId = foods.map((food, index) => [index + 1, food.food_name]); 
  // console.log(foodsId)


// find((food) => food.food_name === stalls[2])
//module.exports = {insertParks, insertFoods}

// in stalls, if [foods].includes stall.foods_served; 
// stall_id ---  foods_id
//    1     ---    1
//    1     ---    3