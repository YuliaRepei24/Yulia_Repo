const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyName, companyObj) {
    // Перевірка, чи існує об'єкт компанії
    if (!companyObj) {
      return null;
    }
  
    // Перевірка, чи співпадає назва компанії з поточним рівнем
    if (companyObj.name === companyName) {
      return companyObj;
    }
  
    // Перевірка, чи є підкомпанії
    if (companyObj.clients && companyObj.clients.length > 0) {
      // Пошук у списку клієнтів
      for (const client of companyObj.clients) {
        const result = findValueByKey(companyName, client);
        if (result) {
          return result;
        }
      }
    }
  
    // Якщо компанія не знайдена, повертаємо null
    return null;
  }
  
  // Приклад використання:
  const companyName = 'Клієнт 1';
  const foundCompany = findValueByKey(companyName, company);
  console.log(foundCompany);
    