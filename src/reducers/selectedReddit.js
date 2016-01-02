/**
 * Created by Mac on 15/11/27.
 */

var ActionTypes = require("../constants/ActionTypes");

// 定义选择框下拉的数据操作
function selectedReddit(state, action) {
	if (!state) {
		state = "reactjs";
	}
	switch (action.type) {
		case ActionTypes.SELECT_REDDIT:
			return action.reddit;
		default :
			return state;
	}
}

module.exports = selectedReddit;
