var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature : undefined,
            isLoading : true,
            errorMessage: undefined
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        this.loadGutuWeather();
    }

    loadGutuWeather(){
        this.handleSearch("Gutu");
    }

    handleSearch(location) {
        var that = this;

        this.setState({
            isLoading : true,
            errorMessage: undefined
        })

        openWeatherMap.getTemperature(location).then(function (temperatue) {
             that.setState({
                 location: location,
                 temperature : temperatue,
                 isLoading : false
             });
        }, function (e) {
            that.setState({
                isLoading : false,
                errorMessage: e.message
            });
        })
    }

    render() {

        var {isLoading, temperature, location, errorMessage} = this.state;

        function renderError() {
            if(typeof errorMessage === 'string'){
                return (<ErrorModal title="Error!!!" errorMessage={errorMessage}/>);
            }
        }
        
        function rendeMessage() {
            if(isLoading){
                return (<div><h3 className="text-center">Fetching weather ...</h3></div>);
            }else if(temperature && location){
                return  (<WeatherMessage temperature={temperature} location={location}/>);
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {rendeMessage()}
                {renderError()}
            </div>
        );
    }
}

module.exports = Weather;