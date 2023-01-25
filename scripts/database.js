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

    },]
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