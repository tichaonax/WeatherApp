var React = require('react');

class WeatherMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var {temperature, location}=this.props;

        return (
            <div>
                <h3> Its {temperature} degrees celcius here in {location}</h3>
            </div>
        );
    }
}

module.exports = WeatherMessage;