var React = require("react");
var PropTypes = require("prop-types");
var queryString = require("query-string");
var api = require("../utils/api");
var {Link } = require('react-router-dom')
var PlayerPreview = require("./PlayerPreview");
var Loading = require('./Loading')

function Profile(props) {
    const info = props.info
    return (
        <PlayerPreview avatar={info.avatar_url} username={info.login}>
            <ul className={"space-list-items"}>
                {info.name && <li>{info.name}</li>}
                {info.location && <li>{info.location}</li>}
                {info.company && <li>{info.company}</li>}
                <li>Followers: {info.followers}</li>
                <li>Following: {info.following}</li>
                <li>Public Repos:{info.public_repos}</li>
            </ul>
        </PlayerPreview>
    )
}

function Player(props) {
    return (
        <div>
            <h1 className={"header"}>{props.label}</h1>
            <h3 style={{textAlign:'center'}}>Score:{props.score}</h3>
           <Profile info={props.profile}/>
        </div>
    )
}

Player.propTypes = {
    label:PropTypes.string.isRequired,
    score:PropTypes.number.isRequired,
    profile:PropTypes.object.isRequired
}
class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  componentDidMount() {
    const players = queryString.parse(this.props.location.search);
    api
      .battle([players.playerOneName, players.playerTwoName])
      .then(results => {
          if(results === null){
              this.setState({
                  error:'looks like there was an error.check if both users exists on Github',
                  loading: false
              })
          }
          this.setState({
              error:null,
              winner:results[0],
              loser:results[1],
              loading: false
          })
      });
  }

  render() {
      const {winner, loser,error,loading} = this.state
      if(loading){
          return <Loading text={"Downloading"}/>
      }
      if(error){
          return <div>
              <p>{error}</p>
              <Link to={'/battle'}>Reset</Link>
          </div>
      }
    return <div className={"row"}>
        <Player label={"Winner"} score={winner.score} profile={winner.profile} />
        <Player label={"Loser"} score={loser.score} profile={loser.profile} />
    </div>;
  }
}

module.exports = Result;
