// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arrFirst = [1, 2, 3];
console.log(arrFirst);
const arrUpdated = arrFirst.concat([4, 5, 6]);
console.log(arrUpdated);
// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr = [1, 2, 3];
console.log(arr);
arr.reverse();
// console.log(arr);
// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr3 = [1, 2, 3];
console.log(arr3.push(4, 5, 6));
console.log(arr3);
// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr4 = [1, 2, 3];
console.log(arr4.unshift(4, 5, 6));
console.log(arr4);
// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
const arr5 = ['js', 'css', 'jq'];
console.log(arr5[0]);
console.log(arr5.shift());
// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const arr6 = ['js', 'css', 'jq'];
console.log(arr6[arr6.length - 1]);
console.log(arr6.pop());
// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
const arr7 = [1, 2, 3, 4, 5];
console.log(arr7);
const newArr7 = arr7.slice(0, 3);
console.log(newArr7);
// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
const arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
const newArr8 = arr8.slice(-2);
console.log(newArr8);
// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(arr9);
// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
const arr10 = [1, 2, 3, 4, 5];
const newArr10 = arr10.slice([1], [4]);
console.log(newArr10);
// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c');
console.log(arr11);
// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c',);
arr12.splice(9,0, 'e');
console.log(arr12);
// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);
// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const arr14 = [5, 6, 7, 8, 9];
let result = arr14.reduce((sum, current) => sum + current, 0);
console.log(result);
// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
const arr15 = [5, 6, 7, 8, 9];
const newArray15= [];
arr15.forEach(function (item) {
    return newArray15.push(item ** 2);
});
console.log(newArray15);
// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
let result16 = arr16.filter(function(item) {
    if (item < 0) {
        return true;
    }
    else {
		return false;
	}
});
console.log(result16);
// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
let result17 = arr17.filter(function(item) {
    if (item % 2 == 0) {
        return true;
    }
    else {
		return false;
	}
});
console.log(result17);


// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let result18 = arr18.filter(function(item) {
    if (item.length > 5) {
        return true;
    }
    else {
		return false;
	}
});
console.log(result18);

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

const arr19 = [1, 2, [3, 4], 5, [6, 7]];
function upFunct(item) {
  return Array.isArray(item);
}
const result19 = arr19.filter(upFunct);
console.log(result19);
// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
function count(item) {
  return item < 0;
}
const countArr = arr20.filter(count);
console.log(countArr.length);
