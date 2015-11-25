define(function (require) {

    var React = require('react');
    var ReactDOM = require('react-dom');
    var HelloMessage = require('HelloMessage');

    ReactDOM.render(
        <HelloMessage name={"Ufuk"} />,
        document.getElementById('react')
    )

});