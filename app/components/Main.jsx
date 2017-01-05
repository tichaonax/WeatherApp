var React = require('react');
var Nav = require('Nav');

class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Nav/>
                </div>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
}

module.exports = Main;