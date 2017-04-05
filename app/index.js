var USER_DATA = {
  name: 'Mohit Garg',
  username: 'mohitgarg',
  image: 'https://avatars2.githubusercontent.com/u/14136405?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*
  Focused
  Independent
  Reusable
  Small
  Testable
*/

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var Link = React.createClass({
  changeURL() {
    window.location.replace(this.props.href)
  },
  render() {
    return (
      <div onClick={this.changeURL} style={{color:'red', cursor:'pointer'}}>{this.props.children}</div>
    )
  }
})


var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
