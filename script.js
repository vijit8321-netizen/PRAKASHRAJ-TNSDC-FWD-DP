const trips = [

  { id: 1, operator: "SilverLine Travels", from: "Chennai", to: "Bengaluru", depart: "22:45", arrive: "05:30", price: 899 },

  { id: 2, operator: "GreenBus", from: "Chennai", to: "Bengaluru", depart: "06:30", arrive: "12:15", price: 699 },

  { id: 3, operator: "Vel Travels", from: "Bengaluru", to: "Chennai", depart: "14:15", arrive: "20:45", price: 549 },

  { id: 4, operator: "Orange Tours", from: "Chennai", to: "Bengaluru", depart: "23:10", arrive: "05:30", price: 1099 }

];

document.getElementById("searchForm").addEventListener("submit", function(e) {

  e.preventDefault();

  const from = document.getElementById("from").value;

  const to = document.getElementById("to").value;

  const date = document.getElementById("date").value;

  const passengers = document.getElementById("passengers").value;

  const resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  const filtered = trips.filter(t => t.from === from && t.to === to);

  if (filtered.length === 0) {

    resultsDiv.innerHTML = `<p>No buses found from ${from} to ${to} on ${date}</p>`;

  } else {

    filtered.forEach(t => {

      const tripEl = document.createElement("div");

      tripEl.className = "trip";

      tripEl.innerHTML = `

        <div class="trip-header">

          <span>${t.operator}</span>

          <span>₹${t.price}</span>

        </div>

        <div class="trip-details">

          Depart: ${t.depart} → Arrive: ${t.arrive} <br>

          Passengers: ${passengers}

        </div>

        <button onclick="alert('Booking confirmed for ${passengers} passenger(s) in ${t.operator}')">Book Now</button>

      `;

      resultsDiv.appendChild(tripEl);

    });

  }

});