// 1. import getBands and assign to a variable 
// 2. declare a function that loops through bands and appends them to html - return html 
// 3. declared an html variable with <ul> in the function 
// 4. use a for of loop to loop through the bands array and use += to add a <li> with a class of band--${band.id} the band.name should be in the <li> 
// 5. after the loop close the </ul> 
// 6. return html 


// 1. create a clickEvent and declare a variable itemClicked = clickEvent.target 
// 2. if itemClicked.class.starts with("band"), destructure the class to extract the bandPrimaryKey
// 3. declare matchingVenues = 
// 3. loop through the bands array
// 4. if(ParseInt(bandPrimaryKey) === band.id)
// 5. matchingVenues = `${band.name} will be playing at <ul>`
// 6. loop through bookings. if booking.bandId === band.id
// 7. loop through venues if venue.id === booking.venue.id, matchingVenues += `<li>${venue.name}</li>
// 8. close the </ul> at the end of the bands loop
// 9. window.alert(`${matchingVenues}) inside the original if statement 

import { getBands, getBookings, getVenues, getMembers } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()
const members = getMembers()

// document.addEventListener(
//     "click", 
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if(itemClicked.id.startsWith("band")) {
//             const [, bandPrimaryKey] = itemClicked.id.split("--")
//             let matchingVenues = ""
//             for(const band of bands){
//                 if(parseInt(bandPrimaryKey) === band.id) {
//                     matchingVenues += `${band.name} will be playing at the following venues \n`
//                     for (const booking of bookings) {
//                         if(booking.bandId === band.id){
//                             for(const venue of venues) {
//                                 if (venue.id === booking.venueId) {
//                                     matchingVenues += `${venue.name}\n`
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//             window.alert(`${matchingVenues}`)
//         }
//     }
// )

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("band")) {
            const [, bandPrimaryKey] = itemClicked.id.split("--")
            let bandMessage = ""
            let matchingVenues = "Upcoming Shows: "
            for (const band of bands){
                if(parseInt(bandPrimaryKey) === band.id){
                    for (const member of members) {
                        if (member.bandId === band.id) {
                            bandMessage += `${member.firstName} ${member.lastName} (${member.role}) \n`
                        }
                    }
                    for (const booking of bookings) {
                        if(booking.bandId === band.id){
                            for(const venue of venues) {
                                if (venue.id === booking.venueId) {
                                    matchingVenues += `\n${venue.name}`
                        
                                }
                            }
                        }
                    }                   
                }
            }
            window.alert(`${bandMessage} ${matchingVenues}`)
        }
    }
)


export const getBandsHTML = () => {
    let html = "<ul> "
    for (const band of bands) {
        html += `<li id= "band--${band.id}">${band.name} </li>`
    }
    html += "</ul>"
    return html
}