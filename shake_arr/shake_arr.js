function myBlend(arr) {
    // Проходимо по кожному елементу масиву
    for (let i = arr.length - 1; i > 0; i--) {
      // Генеруємо випадковий індекс з інтервалу [0, i]
      const randomIndex = Math.floor(Math.random() * (i + 1));
      
      // Міняємо поточний елемент з елементом, що має випадковий індекс
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  myBlend(arr);
  console.log(arr);
  