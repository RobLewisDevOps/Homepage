function updateSelection() {
    const selectElement = document.getElementById("tournamentSelect");
    const descriptionElement = document.getElementById("description");
    const playButton = document.getElementById("playButton");

    const selectedValue = selectElement.value;
    let descriptionText = "";

    switch (selectedValue) {
        case "standard_league":
            descriptionText = "In a standard league, each player competes against every other player.";
            break;
        case "evolving_league":
            descriptionText = "In an evolving league, strategies evolve based on performance.";
            break;
        case "knockout_cup":
            descriptionText = "In a knockout cup, players compete in elimination rounds.";
            break;
        default:
            descriptionText = "";
    }

    descriptionElement.textContent = descriptionText;
    descriptionElement.classList.remove("hidden");
    playButton.classList.remove("hidden");
}

function playTournament() {
    const selectedValue = document.getElementById("tournamentSelect").value;
    window.location.href = `http://127.0.0.1:8081`;
}

// document.addEventListener('DOMContentLoaded', () => {
//     const tournamentType = document.getElementById('tournamentType');
//     const description = document.getElementById('description');
//     const playButton = document.getElementById('playButton');

//     const descriptions = {
//         "standard-league": "A round-robin format where each player competes against every other player.",
//         "evolving-league": "Strategies evolve over time based on performance.",
//         "knockout-cup": "Players compete in elimination rounds until a champion is crowned."
//     };

//     tournamentType.addEventListener('change', () => {
//         const selectedValue = tournamentType.value;
//         description.textContent = descriptions[selectedValue];
//         playButton.disabled = false;

//         playButton.onclick = () => {
//             window.location.href = `http://127.0.0.1:8081/`;
//         };
//     });
// });
