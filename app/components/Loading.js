var React = require("react");
var PropTypes = require("prop-types");

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    var stopper = `${this.state.text}...`;
    this.interval = window.setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({ text: this.props.text });
      } else {
        this.setState(prevState => ({ text: `${prevState.text}.` }));
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.text}</p>;
  }
}

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
};

module.exports = Loading;
