var React = require("react");

require("./picker.scss");

var Picker = React.createClass({
  render: function () {
    var value = this.props.value;
    var onChange = this.props.onChange;
    var options = this.props.options;

    return (
        <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
              <option value={option} key={option}>
                {option}
              </option>)
          }
        </select>
      </span>
    );


  }
});

module.exports = Picker;



