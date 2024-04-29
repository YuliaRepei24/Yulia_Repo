function pad(str, char, count, addToStart) {
    if (typeof str !== 'string' || typeof char !== 'string' || typeof count !== 'number' || typeof addToStart !== 'boolean') {
        return 'Invalid arguments'; // Просто повертаємо рядок з помилкою, якщо типи аргументів некоректні
    }

    const currentLength = str.length;
    const neededLength = currentLength + count;

    if (neededLength <= currentLength) {
        return str; // Якщо не потрібно додавати символи
    }

    const padding = char.repeat(count); // Генеруємо рядок з необхідною кількістю символів

    if (addToStart) {
        return padding + str.slice(0, neededLength - currentLength) + str.slice(neededLength - currentLength);
    } else {
        return str.slice(0, neededLength - currentLength) + str.slice(neededLength - currentLength) + padding;
    }
}

console.log(pad('qwerty', '+', 5, true));
console.log(pad('qwerty', '+', 3, false));  
console.log(pad('hello', '*', 10, true));   
console.log(pad('world', '*', 2, false));   
console.log(pad(123, '+', 5, true));
