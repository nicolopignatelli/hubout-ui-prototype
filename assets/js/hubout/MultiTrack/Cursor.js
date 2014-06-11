/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.Cursor = React.createClass({
  getInitialState: function() {
      return {
        tracksSpaceWidth:    0,
        videoSourceDuration: 0,
        position:            0
      }
  },

  componentDidMount: function() {
    this.setupListeners();
  },

  setupListeners: function() {
    EventDispatcher.addEventListener('MultiTrack.TracksSpace.Ready', this._onTracksSpaceReady);
    EventDispatcher.addEventListener('VideoSource.Ready', this._onVideoSourceReady);
    EventDispatcher.addEventListener('VideoSource.Tick', this._onVideoSourceTick);
  },

  _onTracksSpaceReady: function(eventData) {
    this.setState({
      tracksSpaceWidth: eventData.width
    });
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

  moveToTime: function(currentTime) {
    var duration   = this.state.videoSourceDuration;
    var spaceWidth = this.state.tracksSpaceWidth;
    var position   = Math.round(currentTime * spaceWidth / duration);

    this.setState({'position': position});
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
