let arr = [NaN, undefined, 'sdf',undefined,3, 5, -3, 'sdf',undefined, 'a', NaN, 15, "", -5, ""],
    newArr = filterArray(arr);

function filterArray(arr) {
    function filterer(arr) {
        return isNaN(arr) === false;
    }
    arr = arr.filter(filterer);
    return arr.filter(Boolean);
}


console.log(Math.min.apply(null, newArr));

console.log(Math.max.apply(null, newArr));

let sum = newArr.reduce(function(result, num) {
    return result + num;
}, 0);

console.log(sum);

function calcChangeNotes(price, income) {
    let change = income - price;
    console.log('income: ', income, '- price: ', price, 'change: ', change);
    let arrNotes = [];
    const arr = [1, 2, 5, 10, 20, 50, 100];
    for (let i = arr.length - 1; i >= 0; i--) {
        let x = change / arr[i];
        if (x < 1) continue;
        else {
            x = Math.floor(x);
            change -= x * arr[i];
            console.log('change', change, 'arr[i]', arr[i], ' x_', x,);
            arrNotes.push([arr[i], x]);
        }
    }
    return arrNotes;
}

console.log("calcChangeNotes result ", calcChangeNotes(30, 215));

function countMount(mountsArray) {
    if(mountsArray.length < 3) return 0; // проверяем длину массива, если массив меньше 3 елементов возвращаем 0
    let mounts = mountsArray.map((h, i) => ({ h, i })), // перегоняем массив в объект с индексом и высотой
        sortedMounts = mounts.sort((m1, m2) => sortMounts(m1, m2)), // сортируем массив по высоте
        min = sortedMounts[sortedMounts.length - 2], // берем предпоследний елемент отсортированого массива
        max = sortedMounts[sortedMounts.length - 1], // берем последний елемент отсортированого массива
        start = Math.min(min.i, max.i), // Ищем меньший индекс двух самых больших элементов
        end = Math.max(max.i, min.i) + 1, // Ищем больший индекс двух самых больших элементов
        currentSumm = summ(mountsArray.slice(start, end)), // вычисляем текущего массива
        leftSumm = countMount(mountsArray.slice(0, start + 1)), // вычисляем сумму левого массива
        rightSumm = countMount(mountsArray.slice(end - 1)); // вычисляем сумму правого массива
    return currentSumm + leftSumm + rightSumm; // суммируем результаты левого, текущего и правого
}

function sortMounts(m1, m2) {
    // если высота одинаковая сортируем по изначальному индексу
    return m1.h - m2.h !== 0 ? m1.h - m2.h : m1.i - m2.i;
}
function summ(mounts) {
    let lastIndex = mounts.length - 1, // находим последний индекс
        min = Math.min(mounts[0], mounts[lastIndex]), // находим меньший елемент между двумя крайними
        toCount = mounts.slice(1, lastIndex); // обрезаем два крайних елемента
    return toCount.reduce((summ, h) => summ + (min - h), 0); // находим сумму все оставшихся елементов
}
console.log(countMount([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));


























