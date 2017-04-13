var React = require('React')

class Popular extends React.Component {
  render () {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='languages'>
      {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
    )
  }
}

module.exports = Popular;