myArr = new Array(10); // []
console.log(myArr);

myArr = prompt(`how length this array?`)

while (myArr.length <= [2] || myArr.length >= [10] || myArr.length === null) {
    myArr = prompt(`how length this array again, pls`)

}
prompt(`length this array is ${myArr.length}`)
console.log(myArr.length)


maxRandom = 10;
minRandom = -10;

for (i = 0; i < myArr.length; i++) {
    myArr[i] = Math.floor(Math.random() * (maxRandom - minRandom + 1)) + minRandom;
    console.log(myArr[i])
}

for (i = 1, min = max = myArr[0]; i < myArr.length; i++) {
    currentElement = myArr[i];

    if (currentElement < min) {
        min = currentElement;
    }

    if (currentElement > max) {
        max = currentElement;
    }
}

for (i = 0, sum = 0; i < myArr.length; i++) {
    sum += myArr[i];
}

console.log(myArr);
console.log(`Min element is ${min}`);
console.log(`Max element is ${max}`);
console.log(`Sum of arr elements is ${sum}`)