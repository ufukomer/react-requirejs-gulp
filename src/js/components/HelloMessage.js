define(function (require, exports, module) {

    var React = require('react');

    module.exports = React.createClass({
        displayName: "HelloMessage",
        render: function () {
            return (
                <div>Hello {this.props.name}</div>
            );
        }
    });

});