/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.Cursor = React.createClass({
  getInitialState: function() {
      return {
        videoSourceDuration: 0,
        position:            0
      }
  },

  componentDidMount: function() {
    this.setupListeners();
    this.setupDraggable();
  },

  setupListeners: function() {
    EventDispatcher.addEventListener('VideoSource.Ready', this._onVideoSourceReady);
    EventDispatcher.addEventListener('VideoSource.Tick', this._onVideoSourceTick);
  },

  _onVideoSourceReady: function(eventData) {
    this.setState({
      videoSourceDuration: eventData.duration
    });
  },

  _onVideoSourceTick: function(eventData) {
    var currentTime = eventData.currentTime;
    this.moveToTime(currentTime);
  },

  setupDraggable: function() {
    var node = $(this.getDOMNode());

    $(node).draggable({
      axis: "x" ,
      containment: "parent",
      scroll: false,
      start: function() {
      },
      drag: function() {
      },
      stop: function() {
        var position = parseInt(node.css('left'));

        node.removeAttr('style');

        this.moveToPosition(position);

        EventDispatcher.dispatch('MultiTrack.Cursor.moved', {
          'position': position,
          'time':     this.positionToTime(position)
        });
      }.bind(this)
    });
  },

  positionToTime: function(position) {
    var duration   = this.state.videoSourceDuration;
    var spaceWidth = this.props.containmentWidth;
    var time       = position * duration / spaceWidth;

    return time;
  },

  timeToPosition: function(time) {
    var duration   = this.state.videoSourceDuration;
    var spaceWidth = this.props.containmentWidth;
    var position   = Math.round(time * spaceWidth / duration);

    return position;
  },

  moveToPosition: function(position) {
    this.setState({'position': position});
  },

  moveToTime: function(currentTime) {
    var position = this.timeToPosition(currentTime);

    this.moveToPosition(position);
  },

  render: function() {
    var position = 'position' + this.state.position;
    return (
      <div id="multi-track_cursor" className={position}>
        <div id="multi-track_cursor-bar"></div>
      </div>
    );
  }
});
