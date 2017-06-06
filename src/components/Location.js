var React = require('react');
var Link = require('react-router-dom').Link
class Location extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loc : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        loc: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    var loc = this.state.loc
    return (
      <div className='centered'>
        <h1>Enter A City And State!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.loc}
            placeholder='Tulsa, OK'
            className='loc-input'
          />
          <Link type='submit' className='button'
            to={{
              pathname: '/forecast',
              search: `?location=` + loc
            }}
            disabled={!this.state.loc}>Submit!</Link>
        </form>
      </div>
    )
  }
}

module.exports = Location;
