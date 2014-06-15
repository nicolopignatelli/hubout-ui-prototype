/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.Region = React.createClass({
  componentDidUpdate: function() {
    this.updatePosition();
    this.updateWidth();
  },

  updatePosition: function() {
    var node     = $(this.getDOMNode());
    var position = this.getPositionOnTrack();

    node.css('left', position);
  },

  updateWidth: function() {
    var node  = $(this.getDOMNode());
    var width = this.getWidthOnTrack();

    node.width(width);
  },

  getWidthOnTrack: function() {
    var trackWidth = this.props.trackWidth;
    var duration   = this.props.data.duration;
    var totalTime  = this.props.videoSourceDuration;
    var width      = duration * trackWidth / totalTime;

    return width;
  },

  getPositionOnTrack: function() {
    var time       = this.props.data.time;
    var trackWidth = this.props.trackWidth;
    var totalTime  = this.props.videoSourceDuration;
    var position   = time * trackWidth / totalTime;

    return position;
  },

  render: function() {
    var classes = React.addons.classSet({
      region: true
    });

    return (
      <div className={classes}>
        <div className="header"></div>
      </div>
    );
  }
});
