const seed = require("../db/seed");
const db = require("../db/connection")
afterAll(() => {
  db.end();
});

describe("seed", () => {
  // --- DROP TABLE and CREATE TABLE
  describe("createParks should return a promise that drops any existing table titled 'parks' and create a new one", () => {
    test("successfully create a parks table with 4 columns: table'park_id', 'park_name', 'year_opened' and 'annual_attendance'", () => {
      return seed()
      .then(() => {
        return db.query(`SELECT column_name AS parks
            FROM information_schema.columns
            WHERE table_schema = 'public' 
            AND table_name = 'parks';`)
      })
      .then(({ rows }) => {
        expect(rows).toEqual([
          { parks: 'park_id' },
          { parks: 'park_name' },
          { parks: 'year_opened' },
          { parks: 'annual_attendance' }]
        )
      })
    })
  });
  describe("createRides should return a promise that drops any existing table titled 'rides' and create a new one", () => {
    test("successfully create a rides table with 5 columns: 'ride_id', ride_name', 'year_opened', 'votes' and 'park_id'", () => {
      return seed()
        .then(() => {
          return db.query(`SELECT column_name AS rides
              FROM information_schema.columns
              WHERE table_schema = 'public' 
              AND table_name = 'rides';`)
        })
        .then(({ rows }) => {
          expect(rows).toEqual([
            { rides: 'ride_id' },
            { rides: 'ride_name' },
            { rides: 'year_opened' },
            { rides: 'votes' },
            { rides: 'park_id' }]
          )
        })
    })
  });
  
  describe("createStalls should return a promise that drops any existing table titled 'stalls' and create a new one", () => {
    test("successfully create a stalls table with 3 columns: 'stall_id', 'stall_name' and 'park_id'", () => {
      return seed()
        .then(() => {
          return db.query(`SELECT column_name AS stalls
              FROM information_schema.columns
              WHERE table_schema = 'public' 
              AND table_name = 'stalls';`)
        })
        .then(({ rows }) => {
          expect(rows).toEqual([
            { stalls: 'stall_id' },
            { stalls: 'stall_name' },
            { stalls: 'park_id'}]
          )
        })
    })
  })
  // --- INSERT DATA
  describe("insertParks", () => {
    describe("it should evaluate to a promise that insert data into the 'parks' table", () => {
      test("successfully insert 'Thorpe Park' park" , () => {
        return seed().then(() => {
          return db.query("SELECT * FROM parks WHERE park_id = 1")
          .then(({rows}) => {
            expect(rows[0]).toEqual(  { 
              park_id: 1,
              park_name: 'Thorpe Park', 
              year_opened: 1979, 
              annual_attendance: 1700000 },
            )
          })
        })
      })
      test("successfully insert 'Tivoli Gardens' park" , () => {
        return seed().then(() => {
          return db.query("SELECT * FROM parks WHERE park_id = 4")
          .then(({rows}) => {
            expect(rows[0]).toEqual(  { 
              park_id: 4,
              park_name: 'Tivoli Gardens', 
              year_opened: 1843, 
              annual_attendance: 3972000 },
            )
          })
        })
      })
    })
  });
  
  describe("formatRides", () => {
    describe("it should evaluate to a promise that insert data into the 'rides' table", () => {
      test("succesfully insert 'Colossus' ride", () => {
        return seed().then(() => {
          return db.query(`SELECT * FROM rides WHERE ride_id = 1`)
          .then(({rows}) => {
            expect(rows[0]).toEqual(  {
              ride_id: 1,
              ride_name: 'Colossus',
              year_opened: 2002,
              votes: 5,
              park_id: 1
            })
          })
        })
      })
    test("succesfully insert 'The Little Pilot' ride", () => {
      return seed().then(() => {
        return db.query(`SELECT * FROM rides WHERE ride_id = 20`)
        .then(({rows}) => {
          expect(rows[0]).toEqual(  {
            ride_id: 20,
            ride_name: 'The Little Pilot',
            year_opened: 1990,
            votes: 6,
            park_id: 4
          })
        })
      })
    })
  })
  })  })

// formatRides() shouldn't mutate the inital parks and rides array
// findId() should return an array with [0]id and [1]park_name
// 