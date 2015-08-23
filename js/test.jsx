/** @jsx React.DOM
  */

var Test = React.createClass({
  render: function() {
    return <h1>Test</h1>;
  }
});

React.renderComponent(<Test name="Professor Falken" />, mountNode);