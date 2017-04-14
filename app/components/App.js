var React = require('react')
var Popular = require('./Popular')
var {BrowserRouter, Route} = require('react-router-dom')

class App extends React.Component {
    render() {
        return (
          <BrowserRouter>
              <div className='container'>
                  <Route path="/popular" component={Popular}/>
              </div>
          </BrowserRouter>
        )
    }
}

module.exports = App;