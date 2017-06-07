var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api.js');
var Loading = require('./Loading.js');
var moment = require('moment');

function DetailResults (props) {
  var day = props.weather.list[props.index];
  return (
    <ul className='detail-list'>
          <li key={props.index + 1} className="detail-item">
            <ul>
              <li className='tryit'>
                  <img
                    className='detail-icon'
                    alt={day.weather[0].main}
                    src={require('../images/weather-icons/' + day.weather[0].icon + '.svg')}/>
              </li>
              <li className='partTwo detail-date'>{moment.unix(day.dt).format('dddd, MMM Do')}</li>
            <li className='partTwo'>
                <h2>{day.weather[0].description}</h2>
              </li>
              <li>
                <h3>{'Min temp: ' + day.temp.min + 'ºF'}</h3>
              </li>
              <li>
                <h3>{'Max temp: ' + day.temp.max + 'ºF'}</h3>
              </li>
              <li>
                <h3>{'Humidity: ' + day.humidity + '%'}</h3>
              </li>
            </ul>
          </li>
    </ul>
  )
}


class Detail extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      weather: null,
      loading: true
    }
  }

  componentDidMount() {
    var loc = queryString.parse(this.props.location.search).loc
    api.weather(loc)
      .then(function(weather) {
        this.setState(function () {
          return {
            location: loc,
            weather: weather,
            loading: false
          }
        });
      }.bind(this));
  }

  render() {
    var weatherList = this.state.weather;
    var index = queryString.parse(this.props.location.search).index
    return (
      <div>
        {this.state.loading
        ? <Loading />
      : <DetailResults weather={weatherList} index={index}/>}
      </div>
    )
  }
}

module.exports = Detail;
