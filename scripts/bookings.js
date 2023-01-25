// bookigns will appear across the top of the page
// 
// 1. I will need to import all 3 functions from database
// 2. assign each function to a variable 
// 3. define a new function to append the bookings html with an <ul> 
// 4. define an empty string - html
// 5. loop throught the bookings array
// 6. nested loop through the bands array - if statement, if band.id === booking.bandId html += `${band.name} is playing at 
// 7. nested for loop through venues array -  if venue.id === booking.venueId - html += `${venue.name}


// 1. create a clickEvent and declare itemClicked equal to clickEvent.target. 
// 2. If itemClicked.class.startsWith("booking") destructure the class name to extract the bookingPrimaryKey 
// 3. declarte matchingBookings = null
// 4. loop through bookings. If the bookingPrimaryKey === booking.id. loop through bands 
// 5. if band.id === booking.bandId, matchingBooking += `Band name: ${band.name} \n Genre: ${band.genre} \n Year Formed: ${band.yearFormed} \n There are ${band.members} members of the band`

import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target 
        if(itemClicked.id.startsWith("booking")){
            const [, bookingPrimaryKey] = itemClicked.id.split("--")
            let matchingBookings = ""
            for(const booking of bookings){
                if (parseInt(bookingPrimaryKey) === booking.id){
                    for(const band of bands){
                        if (band.id === booking.bandId){
                            matchingBookings += `Band name: ${band.name} \n Genre: ${band.genre} \n Year Formed: ${band.yearFormed} \n There are ${band.members} members of the band`
                        }
                    }
                }
            }
            window.alert(`${matchingBookings}`)
        }
    }
)

export const getBookingsHTML = () => {
    let html = "<ul>\n"

    for (const booking of bookings) {
        for (const band of bands) {
            if(band.id === booking.bandId){
                html += `<li id="booking--${booking.id}"> ${band.name} is playing at `
            }
        }
        for (const venue of venues){
            if(venue.id === booking.venueId){
                html += `${venue.name} on ${booking.dateBooked}</li>`
                }
        }  
    }
    return html 
}
