/**
 * Created by liangshaofeng on 15/11/21.
 * 在前面的test.js 例子中，我们用到了Node.js 的核心模块assert。
 * Chai 是这个模块的子集。我们可以用Chai 改写这个例子
 * 测试字符串的split方法是否通过
 */

// 用chai作为断言模块，除了这行，下面的代码都是一样的
var assert = require('chai').assert;

//describe("string#split", function () {
//  it("should return an array", function () {
//    assert(Array.isArray('a,b,c'.split(',')));
//  });
//  it('should return the same array', function () {
//    assert.equal(['a', 'b', 'c'].length, 'a,b,c'.split(',').length, 'arrays have equal lenght');
//    for (var i = 0; i < ['a', 'b', 'c'].length; i++) {
//      assert.equal(['a', 'b', 'c'][i], 'a,b,c'.split(',')[i], i + 'element is equal');
//    }
//  })
//});

// ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️上面的写法可以抽象成下面的写法 ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
var expected, current;

// 在describe之前
before(function () {
  expected = ['a', 'b', 'c'];
});
describe('String#split', function () {
  // 在每一个it之前
  beforeEach(function () {
    current = 'a,b,c'.split(',');
  });

  it('should return an array', function () {
    assert(Array.isArray(current))
  });


  it('should return the same array', function () {
    assert.equal(expected.length, current.length, 'array have equal length');
    for (var i = 0; i < expected.length; i++) {
      assert.equal(expected[i], current[i], i + 'element is equal');
    }
  });

});



