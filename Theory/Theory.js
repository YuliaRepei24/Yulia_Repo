function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число від 100 до 1000
        const randomNumber = Math.floor(Math.random() * 901) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    

    const totalCount = evenCount + oddCount;
    const evenPercentage = (evenCount / totalCount) * 100;
    const oddPercentage = (oddCount / totalCount) * 100;

    console.log(`Загальна кількість чисел: ${totalCount}`);
    console.log(`Кількість парних чисел: ${evenCount}, що становить ${evenPercentage.toFixed(2)}%`);
    console.log(`Кількість непарних чисел: ${oddCount}, що становить ${oddPercentage.toFixed(2)}%`);

    // Перевірка близькості до 50% - 50%
    if (Math.abs(evenPercentage - 50) <= 5 && Math.abs(oddPercentage - 50) <= 5) {
        console.log("Відсоткове співвідношення близьке до 50% - 50%.");
    } else {
        console.log("Відсоткове співвідношення відхиляється від 50% - 50%.");
    }
}

checkProbabilityTheory(1000);
