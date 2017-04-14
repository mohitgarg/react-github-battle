var React = require('react');
var PropTypes = React.PropTypes;
var {Link} = require('react-router-dom')

class Home extends React.Component {
    render () {
        return (
          <div className="home-container">
              <h1>Github Battle: Battle your friends and compare points</h1>
              <Link to="/battle" className='button'>Battle</Link>
          </div>
        )
    }
}


module.exports = Home;
