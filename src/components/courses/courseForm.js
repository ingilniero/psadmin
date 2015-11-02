"use strict";

var React = require('react');
var TextInput = require('../common/textInput');
var SelectInput = require('../common/selectInput');

var CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    authors: React.PropTypes.array.isRequired,
    errors: React.PropTypes.object
  },
  render: function() {
    return (
      <div>
        <h1> Manage Course</h1>
        <form>
          <TextInput
            name='title'
            label='Title'
            placeholder='Title'
            value={this.props.course.title}
            error={this.props.errors.title}
            onChange={this.props.onChange}
          />

          <SelectInput
            name='author'
            label='Author'
            options={this.props.authors}
            value={this.props.course.author.name}
            onChange={this.props.onChange}
          />

          <TextInput
            name='length'
            label='Duration'
            placeholder='Duration'
            value={this.props.course.length}
            error={this.props.errors.length}
            onChange={this.props.onChange}
          />

          <TextInput
            name='category'
            label='Category'
            placeholder='Category'
            value={this.props.course.category}
            error={this.props.errors.category}
            onChange={this.props.onChange}
          />

          <input
              type='submit'
              value='Save'
              onClick={this.props.onSave}
              className='btn btn-success' />
        </form>
      </div>
    );
  }
});

module.exports = CourseForm;
