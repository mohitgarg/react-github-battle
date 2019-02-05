var React = require('react')
var PropTypes = require('prop-types')
var api = require('../utils/api')
var Loading = require('./Loading')

// Stateless Functional Components
function SelectLanguage ({selectedLanguage, onSelect}) {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='languages'>
        {languages.map(lang => <li onClick={onSelect.bind(null, lang)}
          key={lang}
          style={lang === selectedLanguage ? { color: '#D0021B' } : null}>
          {lang}
        </li>
        )}
      </ul>
    )
  }

function RepoGrid({repos}) {
  return (
    <ul className='popular-list'>
      {repos.map((repo, index) =>(<li key={repo.id} className='popular-item'>
      <div className='popular-rank'>#{index + 1}</div>
      <ul className='space-list-items'>
        <li>
          <img className='avatar' src={repo.owner.avatar_url} alt={'Avatar for' + repo.owner.login}/>
        </li>
        <li><a href={repo.html_url} target='_blank'>{repo.name}</a></li>
        <li>@{repo.owner.login}</li>
        <li>{repo.stargazers_count} stars</li>
        <li>{repo.forks} forks</li>
      </ul>
      </li>
      ))}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos:PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selectedLanguage:PropTypes.string.isRequired,
  onSelect:PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLanguage:'All',
      repos:null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  componentDidMount() {
   this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage(lang) {
    this.setState({selectedLanguage:lang, repos:null})
    console.log(api.fetchPopularRepos(lang))
    api.fetchPopularRepos(lang)
      .then((repos) => this.setState({repos}))
  }
  render () {
    return (
      <div>
      <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
      {!this.state.repos ? <Loading speed={100}/>:<RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular;
