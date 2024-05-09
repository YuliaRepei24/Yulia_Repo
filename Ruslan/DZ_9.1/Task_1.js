function filterPrimes(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    return arr.filter(num => isPrime(num));
}

let numbers = [23, 17, 4, 9, 11, 29, 6];
let primes = filterPrimes(numbers);
console.log("Массив с простыми числами:", primes);
