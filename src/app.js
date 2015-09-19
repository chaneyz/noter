
var App = React.createClass({displayName: "App",
    render() {
        return React.createElement("h1", null, "Hello Working");
    }
})

var App = React.createClass({displayName: "App",
    render() {
        return React.createElement("h1", null, "Hello Work");
    }
})


React.render(React.createElement(App, null), document.getElementById('example'));