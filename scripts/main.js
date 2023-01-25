import { getBookingsHTML } from "./bookings.js";
import { getBandsHTML } from "./band.js";
import { getVenuesHTML } from "./venue.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h2> Bookings </h2> 
<article class=bookings> 
${getBookingsHTML()}
</article>
<article class = "lists"> 
<section class="venues">
<h2>Venues</h2>
${getVenuesHTML()}
</section>

<section class ="bands">
<h2> Bands </h2> 
${getBandsHTML()}
</section>
</article> 
`

mainContainer.innerHTML = applicationHTML

//add bandsListHTML on line 17
//add venuesListHTML on line 13
// add flexbox to .lists so that the sections will flex