/////////// Filter ///////////

const name = ['Kolya', 'Ivan', 'Tanya', 'Yulia', 'Zenya', 'Vasya'];

function filteritem(str, num, callback) {
  let result = name.filter((name) => name.indexOf(str) !== -1);
  result = result.slice(0, 3);
  callback(result);
}
function showFilter(wrd) {
  console.log(wrd);
}
filteritem("a", 3, showFilter);

////////// Filter /////////////

////////// DelItem  and  Delitems//////////////

var arr = [
  { name: 'Ivan', age: 23, },
  { name: 'Tanya', age: 21, },
  { name: 'Yulia', age: 70, },
  { name: 'Vasya', age: 65, },
  { name: 'Zenya', age: 26, },
  { name: 'Kolya', age: 68, }
];
var delitem = [{ name: 'Ivan', age: 23, }, { name: 'Kolya', age: 68, }];
for (let i = 0; i < arr.length; i++) {
  console.log("i: " + i);
  arr.splice(i, 1);
  console.log(arr);
}

console.log(arr);

////////// DelItems  and  Delitems//////////////
