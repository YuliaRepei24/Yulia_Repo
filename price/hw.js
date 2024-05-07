let services = {
    "Стрижка": 160,
    "Манікюр": 280,
    "Нарощування волос": 400,
    "Миття голови": 50
};

function calculateTotalPrice() {
    let totalPrice = 0;

    for (let service in services) {
        totalPrice += services[service];
    }

    return totalPrice;
}

function findMinPrice() {
    let minPrice = Infinity;

    for (let service in services) {
        if (services[service] < minPrice) {
            minPrice = services[service];
        }
    }

    return minPrice;
}

function findMaxPrice() {
    let maxPrice = 0;

    for (let service in services) {
        if (services[service] > maxPrice) {
            maxPrice = services[service];
        }
    }

    return maxPrice;
}

console.log("Загальна вартість наданих послуг:", calculateTotalPrice(), "грн");
console.log("Мінімальна вартість послуги:", findMinPrice(), "грн");
console.log("Максимальна вартість послуги:", findMaxPrice(), "грн");
