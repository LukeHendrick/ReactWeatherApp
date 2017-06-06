var axios = require('axios');

module.exports = {
  weather: function(location) {
    var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q='
    + location + '&units=imperial&cnt=5&appid=c4cd4d33febf26a19524fee9df8074e5')

    return axios.get(encodedURI).then(function(response) {
      return response.data
    })
  }
}
