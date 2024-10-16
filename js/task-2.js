function calcAverageCalories(days) {
    if (days.length === 0) {
        return 0;
    }

    let totalCalories = 0;
    for (let day of days) {
        totalCalories += day.calories;
    }

    return totalCalories / days.length;
}

function displayCalories() {
    let outputDiv = document.getElementById('outputDiv');

    let weeklyCalories = [
        { day: "monday", calories: 3010 },
        { day: "tuesday", calories: 3200 },
        { day: "wednesday", calories: 3120 },
        { day: "thursday", calories: 2900 },
        { day: "friday", calories: 3450 },
        { day: "saturday", calories: 3280 },
        { day: "sunday", calories: 3300 }
    ];
    let average1 = calcAverageCalories(weeklyCalories);
    outputDiv.innerHTML += `Середня кількість калорій: ${average1.toFixed(2)}<br>`; 

    weeklyCalories = [
        { day: "monday", calories: 2040 },
        { day: "tuesday", calories: 2270 },
        { day: "wednesday", calories: 2420 },
        { day: "thursday", calories: 1900 },
        { day: "friday", calories: 2370 },
        { day: "saturday", calories: 2280 },
        { day: "sunday", calories: 2610 }
    ];
    let average2 = calcAverageCalories(weeklyCalories);
    outputDiv.innerHTML += `Середня кількість калорій: ${average2.toFixed(2)}<br>`;

    let average3 = calcAverageCalories([]);
    outputDiv.innerHTML += `Середня кількість калорій: ${average3.toFixed(2)}<br>`;
}

displayCalories();
