var React = require('react');

class WeatherForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" ref="location"/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}

module.exports = WeatherForm;