// 1. import getVenues and assign to a variable 
// 2. declare a function that loops through venues and appends them to html - return html 
// 3. declared an html variable with <ul> in the function 
// 4. use a for of loop to loop through the venues array and use += to add a <li> with a class of venue--${venue.id} 
// 5. after the loop close the </ul> 
// 6. return html 

// 1. create a click event for the venues list. 
// 2. declare itemClicked = clickEvent.target
// 3. declare a string matchingBands = "The following bands will be playing at"
// 4. if itemClicked.class.startsWith("venue") destructure the class to extract the venue primary key from the class name. 
// 5. loop through the venues array. if the venue.id matches the parseInt(venuePrimaryKey), matchingBands += `${venue.name} \n <ul>`
// 6. loop through the bookings array. if the venue.id matches the booking.venueId loop through bands 
// 7. In the bands loop, if the band.id matches the bookings.bandId, matchingBands += `<li>${band.name}</li>`
// 8. close the html at the end of the venues loop
// 9. inside the if statement, window.alert(`${matchingBands})

import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target 
        let matchingBands = "The following bands will be playing at " 
        if (itemClicked.id.startsWith("venue")){
            const [, venuePrimaryKey] = itemClicked.id.split("--")
            for(const venue of venues) {
                if (parseInt(venuePrimaryKey) === venue.id){
                    matchingBands += `${venue.name} \n`
                    for(const booking of bookings){
                        if( booking.venueId === venue.id){
                            for (const band of bands) {
                                if(band.id === booking.bandId){
                                    matchingBands += `${band.name} \n`
                                }
                            }
                        }
                    }
                }
            }
            window.alert(`${matchingBands}`)
        }
    }
)

export const getVenuesHTML = () => {
    let html = "<ul> "
    for (const venue of venues) {
        html += `<li id = "venue--${venue.id}"> ${venue.name} </li> `
    }
     html += "</ul> "
     return html
}