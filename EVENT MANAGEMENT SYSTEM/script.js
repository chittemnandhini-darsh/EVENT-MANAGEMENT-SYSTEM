// Event registration buttons

function registerEvent(eventName) {

    document.getElementById("event").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });
}


// Registration form

document.getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        let selectedEvent =
            document.getElementById("event").value;

        document.getElementById("successMessage").innerHTML =
            "Registration Successful! 🎉<br>" +
            "Thank you, " + name +
            ". You registered for " +
            selectedEvent + ".";

        document.getElementById("registrationForm")
            .reset();

    });


// Search events

function searchEvents() {

    let search =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".event-card");

    cards.forEach(function(card) {

        let eventName =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        if (eventName.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}