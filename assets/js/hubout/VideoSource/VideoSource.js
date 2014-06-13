/** @jsx React.DOM */
var VideoSource = React.createClass({
  getInitialState: function() {
    return {
      player: null
    };
  },

  componentDidMount: function() {
    this.setupListeners();
    this.loadVideoPlayer();
  },

  setupListeners: function() {
    EventDispatcher.addEventListener('MultiTrack.Cursor.drag.stop', this._onCursorDragStop);
  },

  _onCursorDragStop: function(eventData) {
    this.state.player.seekTo(eventData.time);
  },

  loadVideoPlayer: function() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
      player = new YT.Player('video-source-player', {
      height: '390',
      width: '640',
      videoId: this.props.id,
      events: {
          'onReady': function() {
            this._onPlayerReady(player);
          }.bind(this)
        }
      });
    }.bind(this);
  },

  _onPlayerReady: function() {
    this.setState({'player': player});
    this.setupOnTick();
    this.raiseReadyEvent();
    this.state.player.playVideo();
    //temp line
    this.state.player.mute();
  },

  raiseReadyEvent: function() {
    var videoDuration = this.state.player.getDuration();
    var eventData = {
      duration: videoDuration
    };

    EventDispatcher.dispatch('VideoSource.Ready', eventData);
  },

  setupOnTick: function () {
    setInterval(this._onTick, 100);
  },

  _onTick: function() {
    var currentTime = this.state.player.getCurrentTime();
    var eventData = {
      currentTime: currentTime
    };

    EventDispatcher.dispatch('VideoSource.Tick', eventData);
  },

  render: function() {
    return (
      <div id="video-source">
        <div id="video-source-player"></div>
      </div>
    );
  }
});
