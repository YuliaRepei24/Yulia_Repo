const myObject = {
    name: "Юлія",
    age: 34,
    city: "Київ",
    gender: "Жіночий",
  
    getInfo() {
      let keys = Object.keys(this);
  
      keys.forEach((key) => {
        if (typeof this[key] !== "function") {
          console.log(`${key}: ${this[key]}`);
        }
      });
    },
  };
  
  myObject.getInfo();
