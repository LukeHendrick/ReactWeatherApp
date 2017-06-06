var React = require('react');
var queryString = require('query-string');
var Loading = require('./Loading.js');
var api = require('../utils/api.js')
var moment = require('moment')
var Link = require('react-router-dom').Link

function WeatherGrid (props) {
  let match = props.match
  let loc = props.loc
  console.log(props.weather);
  return (
    <ul className='weather-list'>
      {props.weather.map(function (day, index) {
        return (
          <li key={index + 1} className="weather-item">
            <ul>
              <li>
                <Link to={{
                    pathname: match + '/detail',
                    search: '?loc=' + loc + '&index=' + index
                  }}>
                  <img
                    className='weather-icon'
                    alt={day.weather[0].main}
                    src={require('../images/weather-icons/' + day.weather[0].icon + '.svg')}/>
                </Link>
              </li>
              <li className='weather-date'>{moment.unix(day.dt).format('dddd, MMM Do')}</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

class Forecast extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      loading: true,
      weather: null
    }
  }

  componentDidMount() {
    var loc = queryString.parse(this.props.location.search).location
    api.weather(loc)
      .then(function(weather) {
        this.setState(function () {
          return {
            location: loc,
            weather: weather,
            loading: false
          }
        })
        console.log(weather.list);
      }.bind(this));
  }
  render() {
    var location = this.state.location
    var weather = this.state.weather
    var loading = this.state.loading;
    if (loading === true) {
      return <Loading />
    }
    return (
      <div>
        <h1 className='loc-title'>{location}</h1>
        <WeatherGrid  loc={location} match={this.props.match.url} weather={weather.list}/>
      </div>
    )
  }
}

module.exports = Forecast;
