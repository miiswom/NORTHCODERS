exports.fetchAllRides = async () => {
  const rides = require("../data/rides");
  //console.log(rides)
  return rides.map((ride, index) => ({
    ride_id: index + 1,
    ride_name: ride.ride_name,
    year_opened: ride.year_opened,
    park_name: ride.park_name,
    votes: ride.votes
  }))
};

exports.fetchRideById = async (id) => {
  return this.fetchAllRides()
  .then((rides) => { return rides.find((ride) => { return ride.ride_id === id})})
  .then((ride) => { return ride })
}

// console.log(fetchRideById(1))