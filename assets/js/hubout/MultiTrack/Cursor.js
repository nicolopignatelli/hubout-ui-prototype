/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.Cursor = React.createClass({
  getInitialState: function() {
      return {
        position:            0
      }
  },

  componentDidMount: function() {
    this.setupListeners();
    this.setupDraggable();
  },

  setupListeners: function() {
    EventDispatcher.addEventListener('VideoSource.Tick', this._onVideoSourceTick);
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
      stop: function() {
        this._onStopDrag(node);
      }.bind(this)
    });
  },

  _onStopDrag: function(node) {
    var position = parseInt(node.css('left'));

    node.removeAttr('style');

    this.moveToPosition(position);

    EventDispatcher.dispatch('MultiTrack.Cursor.drag.stop', {
      'position': position,
      'time':     this.positionToTime(position)
    });
  },

  positionToTime: function(position) {
    var duration   = this.props.videoSourceDuration;
    var spaceWidth = this.props.containmentWidth;
    var time       = position * duration / spaceWidth;

    return time;
  },

  timeToPosition: function(time) {
    var duration   = this.props.videoSourceDuration;
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
