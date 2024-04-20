let yearStr = prompt('Ваш вік:');
let year = parseInt(yearStr);

if (!isNaN(year) && yearStr !== '' && year >= 0) {
    
    let ageTxt;

    if (year === 0) {
        console.log(`Тобі менше року, малюк`);
    } else if (year % 10 === 1 && year % 100 !== 11) {
        ageTxt = 'рік';
    } else if ((year % 10 === 2 || year % 10 === 3 || year % 10 === 4) && (year % 100 < 10 || year % 100 > 20)) {
        ageTxt = 'роки'; // Змінено з "рокі" на "роки"
    } else {
        ageTxt = 'років';
    }
    
    if (ageTxt) {
        console.log(`Тобі ${year} ${ageTxt}`);
    }
} else {
    console.log('Введено некоректні дані');
}
