var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e){
        e.preventDefault();
        alert("Not wired up yet");
    }

    render() {
        return (
            <div className="top-bar">

                <div className="top-bar-left">

                    <ul className="menu">
                        <li class="menu-text">Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get
                                Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>

                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search Weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = Nav;
