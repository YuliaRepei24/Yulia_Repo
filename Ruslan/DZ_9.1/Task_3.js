function groupArray(arr) {
    return arr.reduce((grouped, item) => {
        grouped[item] = grouped[item] || [];
        grouped[item].push(item);
        return grouped;
    }, {});
}

const array = [1, 2, 2, 3, 3, 3];
const grouped = groupArray(array);
console.log(grouped);
