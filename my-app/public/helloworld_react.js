/**
 * Created by jinx on 7/5/17.
 */
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

var a = 3;
ReactDOM.render(
    <div>
        <h1>{a == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('example1')
);


ReactDOM.render(
    <div>
        <h1>{1 + 1}</h1>
    </div>
    ,
    document.getElementById('example2')
);


var myStyle = {
    fontSize: 22,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style={myStyle}>Just test</h1>,
    document.getElementById('example3')
);


var MyComponent = React.createClass({
    render: function () {
        return <h1>Hello World！</h1>;
    }
});
var myElement = <MyComponent someProperty={true}/>;
ReactDOM.render(myElement, document.getElementById('example4'));


var HelloMessage = React.createClass({
    render: function () {
        return <h1>Hello {this.props.name}</h1>;
    }
});
ReactDOM.render(
    <HelloMessage name="jinx"/>,
    document.getElementById('example5')
);


var WebSite = React.createClass({
    render: function () {
        return (
            <div>
                <Name name={this.props.name}/>
                <Link site={this.props.site}/>
            </div>
        );
    }
});
var Name = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
});
var Link = React.createClass({
    render: function () {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
});
ReactDOM.render(
    <WebSite name="Jinx's test " site="jinx"/>,
    document.getElementById('example6')
);


