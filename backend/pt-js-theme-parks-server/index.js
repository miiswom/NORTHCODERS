
const db = require("./connection");
const format = require('pg-format');

const parks = [
  { park_id: 1, park_name: 'Thorpe Park', year_opened: 1979, annual_attendance: 1700000 },
  { park_name: 'Alton Towers', year_opened: 1980, annual_attendance: 2520000 },
  {
    park_id: 2, 
    park_name: 'Chessington World of Adventures',
    year_opened: 1987,
    annual_attendance: 1400000,
  },
  {
    park_id: 3,
    park_name: 'Tivoli Gardens',
    year_opened: 1843,
    annual_attendance: 3972000,
  },
];

const rides = [
  {
    ride_name: 'Colossus',
    year_opened: 2002,
    park_name: 'Thorpe Park',
    votes: 5,
  },
  {
    ride_name: 'Stealth',
    year_opened: 2006,
    park_name: 'Thorpe Park',
    votes: 4,
  },
  {
    ride_name: 'Loggers Leap',
    year_opened: 1989,
    park_name: 'Thorpe Park',
    votes: 9,
  },
  {
    ride_name: 'Mr Monkeys Banana Ride',
    year_opened: 1994,
    park_name: 'Thorpe Park',
    votes: 5,
  },
  {
    ride_name: 'Tidal Wave',
    year_opened: 2000,
    park_name: 'Thorpe Park',
    votes: 1,
  },
  {
    ride_name: 'Rocky Express',
    year_opened: 1989,
    park_name: 'Thorpe Park',
    votes: 5,
  },
  {
    ride_name: 'Nemesis',
    year_opened: 1994,
    park_name: 'Alton Towers',
    votes: 5,
  },
  {
    ride_name: 'The Smiler',
    year_opened: 2013,
    park_name: 'Alton Towers',
    votes: 1,
  },
  {
    ride_name: 'Rita',
    year_opened: 2005,
    park_name: 'Alton Towers',
    votes: 5,
  },
  {
    ride_name: 'Congo River Rapids',
    year_opened: 1994,
    park_name: 'Alton Towers',
    votes: 3,
  },
  {
    ride_name: 'Enterprise',
    year_opened: 1984,
    park_name: 'Alton Towers',
    votes: 5,
  },
  {
    ride_name: 'Gallopers Carousel',
    year_opened: 1991,
    park_name: 'Alton Towers',
    votes: 7,
  },
  {
    ride_name: 'Rattlesnake',
    year_opened: 1998,
    park_name: 'Chessington World of Adventures',
    votes: 11,
  },
  {
    ride_name: 'Tiger Rock',
    year_opened: 2018,
    park_name: 'Chessington World of Adventures',
    votes: 3,
  },
  {
    ride_name: 'KOBRA',
    year_opened: 2010,
    park_name: 'Chessington World of Adventures',
    votes: 1,
  },
  {
    ride_name: 'Tiny Truckers',
    year_opened: 1994,
    park_name: 'Chessington World of Adventures',
    votes: 2,
  },
  {
    ride_name: 'The Demon',
    year_opened: 2004,
    park_name: 'Tivoli Gardens',
    votes: 8,
  },
  {
    ride_name: 'The Caravan',
    year_opened: 1974,
    park_name: 'Tivoli Gardens',
    votes: 1,
  },
  {
    ride_name: 'The Bumper Cars',
    year_opened: 1926,
    park_name: 'Tivoli Gardens',
    votes: 25,
  },
  {
    ride_name: 'The Little Pilot',
    year_opened: 1990,
    park_name: 'Tivoli Gardens',
    votes: 6,
  },
];


function formatRides() {
  // ride_name, year_opened, votes, park_id
    //return newAlbumFormats
    //return rides.map((ride, i) => {
    const rides = require("./db/data/rides");
    return rides.map((ride) => {
      if(ride.park_name === 'Thorpe Park') {
        ride.park_id = 1;
        delete ride.park_name;
      } else if(ride.park_name === 'Alton Towers') {
        ride.park_id = 2;
        delete ride.park_name;
      } else if(ride.park_name === 'Chessington World of Adventures') {
        ride.park_id = 3;
        delete ride.park_name;
      } else if(ride.park_name === 'Tivoli Gardens') {
        ride.park_id = 4;
        delete ride.park_name
      }
      const newRide = []
      for(let key in ride) {
          newRide.push(ride[key])
        // newRide.ride_name = ride[key],
        // newRide.year_opened = ride[key]
      }
      //console.log(newRide)
      return db.query(format(`INSERT INTO rides (ride_name, year_opened, votes, park_id)
                              VALUES %L RETURNING * ;`, newRide))
                              .then(({rows}) => { console.log(rows[0])})
      //return ride
    })

    }

 // console.log(test(parks))

formatRides(rides)
//console.log(parks[0].park_id)