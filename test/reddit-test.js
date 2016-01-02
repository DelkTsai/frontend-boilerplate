/**
 * Created by Mac on 15/11/27.
 */

var assert = require('chai').assert;

var selectedReddit = require('../src/reducers/selectedReddit');

describe("test-search#reddit", function () {

  it("should return what i give it", function () {
    var reddit = "blabla";
    var nextReddit = "blabla";
    assert.equal(nextReddit, selectedReddit(reddit, {type: "SELECT_REDDIT", reddit: nextReddit}));
  });

});