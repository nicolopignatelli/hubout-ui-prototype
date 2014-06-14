/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.Track = React.createClass({
  render: function() {
    var classes = 'track ' + this.props.key;

    return (
      <div className={classes}>

      </div>
    );
  }
});
