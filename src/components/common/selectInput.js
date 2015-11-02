"use strict";

var React = require('react');
var _ = require('lodash');

var SelectInput = React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },
  _onChange: function(e) {
    var option = _.find(this.props.options, { id: e.target.value });
    var author = {};
    author.id = option.id;
    author.name = option.firstName + ' ' + option.lastName;

    this.props.onChange(e, author);
  },
  render: function() {
    var createOption = function(option) {
        return (
          <option key={option.firstName} value={option.id}>{option.firstName} {option.lastName}</option>
        );
    };

    return (
      <div className='form-group'>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className='field'>
          <select onChange={this._onChange} name={this.props.name} className='form-control' value={this.props.value}>
            {this.props.options.map(createOption, this)}
          </select>
        </div>
      </div>
    );
  }
});

module.exports = SelectInput;
