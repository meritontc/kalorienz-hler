let totalCalories = 0;

function addFood() {
    const foodInput = document.getElementById("food");
    const caloriesInput = document.getElementById("calories");
    const foodList = document.getElementById("food-list");
    const totalDisplay = document.getElementById("total");

    const foodName = foodInput.value;
    const calories = parseInt(caloriesInput.value);

    if (foodName && !isNaN(calories)) {
        // Füge Lebensmittel zur Liste hinzu
        const listItem = document.createElement("li");
        listItem.textContent = `${foodName} - ${calories} kcal`;
        foodList.appendChild(listItem);

        // Aktualisiere Gesamtkalorien
        totalCalories += calories;
        totalDisplay.textContent = totalCalories;

        // Zurücksetzen der Eingabefelder
        foodInput.value = "";
        caloriesInput.value = "";
    } else {
        alert("Bitte gib ein Lebensmittel und Kalorien ein!");
    }
}