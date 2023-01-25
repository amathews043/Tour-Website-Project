const database = {
    venues: [{
        id: 1, 
        name: "venue 1", 
        space: "5,000 square feet",
        maxOccupancy: 200,
        }, 
        {
        id: 2, 
        name: "venue 2", 
        space: "25,000 square feet",
        maxOccupancy: 2000,
        },
        {
        id: 3, 
        name: "venue 3", 
        space: "2,500 square feet",
        maxOccupancy: 500,
        },
        {
        id: 4, 
        name: "venue 4", 
        space: "500 square feet",
        maxOccupancy: 50,
            },
        ],
    bands: [{
        id: 1, 
        name: "band one", 
        members: 5,
        genre: "Rock", 
        yearFormed: 2016, 
        },
        {
        id: 2, 
        name: "band two", 
        members: 3,
        genre: "pop", 
        yearFormed: 2023, 
        },
        {
        id: 3, 
        name: "band three", 
        members: 6,
        genre: "folk", 
        yearFormed: 2019, 
        },
        {
        id: 4, 
        name: "band four", 
        members: 6,
        genre: "blues",
        yearFormed: 2021, 
        },
        {
        id: 5, 
        name: "band five", 
        members: 5,
        genre: "pop rock", 
        yearFormed: 2017, 
        },
        {
        id: 6, 
        name: "band six", 
        members: 12,
        genre: "choral",
        yearFormed: 2012, 
        },
    ], 
    bookings: [{
        id: 1, 
        bandId: 2, 
        venueId: 3, 
        dateBooked: "January 24th, 2023", 

    }, {
        id: 2, 
        bandId: 3, 
        venueId: 4, 
        dateBooked: "January 22nd, 2023",

    }, {
        id: 3, 
        bandId: 1, 
        venueId: 1, 
        dateBooked: "January 15th, 2023",

    }, {
        id: 4, 
        bandId: 6, 
        venueId: 2, 
        dateBooked: "January 11th, 2023",

    }, {
        id: 5, 
        bandId: 4, 
        venueId: 4, 
        dateBooked: "January 12th, 2023",

    }, {
        id: 6, 
        bandId: 5, 
        venueId: 3, 
        dateBooked: "January 15th, 2023",

    }, {
        id: 7, 
        bandId: 4, 
        venueId: 2, 
        dateBooked: "January 2nd, 2023",

    },],
    members: [
        {
        
          firstName: "Number one", 
          lastName: "yes", 
          id: 1, 
          yearBorn: 1998, 
          role: "drummer", 
          bandId: 1
        }, 
        {
            firstName: "Number two", 
            lastName: "yes", 
            id: 2, 
            yearBorn: 1994, 
            role: "singer", 
            bandId: 1
        },
        {
            firstName: "Number three", 
            lastName: "yes", 
            id: 3, 
            yearBorn: 1995, 
            role: "singer", 
            bandId: 2
        },
        {
            firstName: "Number four", 
            lastName: "yes", 
            id: 4, 
            yearBorn: 1996, 
            role: "guitar", 
            bandId: 2
        },
        {
            firstName: "Number five", 
            lastName: "yes", 
            id: 5, 
            yearBorn: 1982, 
            role: "singer", 
            bandId: 3
        },
        {
            firstName: "Number six", 
            lastName: "yes", 
            id: 6, 
            yearBorn: 1987, 
            role: "harmonica", 
            bandId: 3
        },
        {
            firstName: "Number seven", 
            lastName: "yes", 
            id: 7, 
            yearBorn: 1989, 
            role: "singer", 
            bandId: 4
        },
        {
            firstName: "Number eight", 
            lastName: "yes", 
            id: 8, 
            yearBorn: 1972,  
            role: "bass", 
            bandId: 4
        },
        {
            firstName: "Number nine", 
            lastName: "yes", 
            id: 9, 
            yearBorn: 1987, 
            role: "trumpet", 
            bandId: 5
        },
        {
            firstName: "Number ten", 
            lastName: "yes", 
            id: 10, 
            yearBorn: 1987, 
            role: "piano", 
            bandId: 5
        },
        {
            firstName: "Number eleven", 
            lastName: "yes", 
            id: 11, 
            yearBorn: 2003, 
            role: "singer", 
            bandId: 6
        },
        {
            firstName: "Number twelve", 
            lastName: "yes", 
            id: 12, 
            yearBorn: 1952, 
            role: "strings", 
            bandId: 6
        },
      ], 
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
} 

export const getMembers = () => {
    return database.members.map(member => ({...member}))
}