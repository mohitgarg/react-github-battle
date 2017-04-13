var React = require('react')
var PropTypes = require('prop-types')

function SelectLanguage ({selectedLanguage, onSelect}) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='languages'>
        <p>Lang:{selectedLanguage}</p>
        {languages.map(lang => <li onClick={onSelect.bind(null, lang)}
          key={lang}
          style={lang === selectedLanguage ? { color: '#D0021B' } : null}>
          {lang}
        </li>
        )}
      </ul>
    )
  }


SelectLanguage.propTypes = {
  selectedLanguage:PropTypes.string.isRequired,
  onSelect:PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      selectedLanguage:'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage(lang) {
    this.setState({selectedLanguage:lang})
  }
  render () {
    return (
      <div>
      <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular;