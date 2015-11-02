"use strict";

var React = require('react');

var SelectInput = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },
  render: function() {
    var createOption = function(option) {
        return (
          <option key={option.firstName}>{option.firstName} {option.lastName}</option>
        );
    };

    return (
      <div className='form-group'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className='field'>
          <select onChange={this.props.onChange} name={this.props.name} className='form-control' value={this.props.value}>
            {this.props.options.map(createOption, this)}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = SelectInput;
