var React = require('react')
var NavLink = require('react-router-dom').NavLink
var Link = require('react-router-dom').Link

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state= {
      loc: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value

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
    var loc = this.state.loc;

    return (
      <div className='navbar'>
        <NavLink className='nav-text'to='/'>Home</NavLink>
        <form className='nav-form' onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.loc}
            placeholder='Tulsa, OK'
            className='nav-input'
          />
        <Link type='submit' className='nav-button'
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

module.exports = Nav;
