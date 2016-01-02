/**
 * Created by liangshaofeng on 15/11/23.
 * 初步尝试给reducer编写第一个测试文件
 */

var assert = require('chai').assert;

var search = require('../src/reducers/add');

describe("test-search#search", function () {
  it("should return + 1", function () {
    var state = 1;
    var nextState = 2;
    assert.equal(nextState, search(state, {type: "ADD_TAG"}));
  });

  it("should return self", function () {
    var state = 1;
    var nextState = 1;
    assert.equal(nextState, search(state, {type: "Others"}));
  });
});