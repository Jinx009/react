/**
 * Created by jinx on 7/5/17.
 */
var HelloMessage = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'Hello'
        };
    },
    render: function () {
        return <h1>Hello {this.props.name}</h1>;
    }
});
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);
