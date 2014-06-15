/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.MultiTrack = React.createClass({
  getInitialState: function() {
    return {
      videoSourceDuration: 0
    }
  },

  componentDidMount: function() {
    this.setupListeners();
  },

  setupListeners: function() {
    EventDispatcher.addEventListener('VideoSource.Ready', this._onVideoSourceReady);
  },

  _onVideoSourceReady: function(eventData) {
    this.setState({
      videoSourceDuration: eventData.duration
    });
  },

  render: function() {
    var width                  = 640;
    var height                 = 290;
    var duration               = this.state.videoSourceDuration;
    var cursorContainmentWidth = width;
    var tracksSpaceSize        = {'width': width, 'height': height};

    return (
      <div id="multi-track">
        <MultiTrack.TracksSpace videoSourceDuration={duration} size={tracksSpaceSize} regions={this.props.regions} />
        <MultiTrack.Cursor videoSourceDuration={duration} containmentWidth={cursorContainmentWidth} />
        <MultiTrack.VerticalZoomControl />
        <MultiTrack.HorizontalZoomControl />
        <MultiTrack.NewTrackButton />
        <div id="multi-track-footer"></div>
      </div>
    );
  }
});
