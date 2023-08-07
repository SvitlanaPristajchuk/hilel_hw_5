arr = [`barbe`, `can`];
len = arr.length;
//userQuestion = prompt(`Enter the length of array?`)
//while (userQuestion === null || userQuestion.replaceAll(` `, ``) === ``) {
// userQuestion = prompt(`Enter the length of array again?`)
// console.log(len)
//}

min = 2;
max = 10;

console.log(arr)
console.log(arr.length)
console.log(arr[1])
console.log(arr[100])
arr[100] = 'sindi'
console.log(arr[100])
console.log(arr)

arr[0] = 'svitlana'
console.log(arr)

arr.length = 5;
console.log(arr)
arr[arr.length] = 'roma'
console.log(arr)
arr.length = arr.length + 1;
console.log(arr)

arr.push('tiger')
console.log(arr)

arr.unshift('swift', 'cat', 'dog')
console.log(arr)

arr.shift()
console.log(arr)

arr.pop()
console.log(arr)
arrNew = arr.join(';')
console.log(arrNew)


arr = ['barby', 'can', 'habr']
arr.reverse()
console.log(arr)