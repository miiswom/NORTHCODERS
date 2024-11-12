exports.fetchParks = async () => {
  const parks = require("../data/parks")
  return parks.map((park, index) => (
    {
      park_id: index + 1,
      park_name: park.park_name,
      year_opened: park.year_opened
    }
  ))
}

//console.log(fetchParks())