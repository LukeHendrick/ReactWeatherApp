var React = require('react');
var Location = require('./Location.js')

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      location : '',
      temp: null
    }

  }

  render() {
    return (
      <div>
        <Location onSubmit={this.handleSubmit} match={this.props.match} />
      </div>
    )
  }
}

module.exports = Home;
