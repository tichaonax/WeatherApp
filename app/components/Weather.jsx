var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: "gutu",
            temperature : 56,
            isLoading : false
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location) {
        var that = this;

        this.setState({
            isLoading : true
        })

        //debugger;
        openWeatherMap.getTemperature(location).then(function (temperatue) {
             that.setState({
                 location: location,
                 temperature : temperatue,
                 isLoading : false
             });
        }, function (errorMessage) {
            that.setState({
                isLoading : false
            });
            alert(errorMessage);
        })
    }

    render() {

        var {isLoading, temperature, location} = this.state;

        function rendeMessage() {
            if(isLoading){
                return (<div><h3 className="text-center">Fetching weather ...</h3></div>);
            }else if(temperature && location){
                return  (<WeatherMessage temperature={temperature} location={location}/>);
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {rendeMessage()}
            </div>
        );
    }
}

module.exports = Weather;