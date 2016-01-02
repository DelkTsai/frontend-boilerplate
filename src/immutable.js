// 可变数据的坏处
var foo = {a: 1};
var bar = foo;
bar.a = 2;
console.log(foo);


// immutable的写法
var Immutable = require('immutable');
var foo = Immutable.fromJS({a: {b: 1}});
var bar = foo.setIn(['a', 'b'], 2);   // 使用setIn赋值

console.log(foo.getIn(['a', 'b']));    // 使用getIn取值，打印，1
console.log(foo === bar);
console.log(foo);
console.log(bar);
console.log('===============');


function touchAndLog(touchFn) {
  //var data = Immutable.fromJS({key:'value'});
  var data = {key: 'value'};
  touchFn(data);
  console.log(data);    // 我TM哪儿知道这个玩意儿是啥！！
}

function touchFn(data) {
  data.key = 'test';
}

touchAndLog(touchFn);

console.log('共享节点，节省内存');
var Map = require('immutable').Map;
var a = Map({
  select: 'users',
  filter: Map({name: 'Cam'})
})
var b = a.set('select', 'people');

console.log(a === b); //false
console.log(a.get('filter') === b.get('filter'));
