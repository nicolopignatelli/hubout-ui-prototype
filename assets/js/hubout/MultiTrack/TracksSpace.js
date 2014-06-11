/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.TracksSpace = React.createClass({
  getInitialState: function() {
      return {
        width: 0
      }
  },

  componentDidMount: function() {
    var width = parseInt($(this.getDOMNode()).width());
    this.setState({'width': width});
    this.raiseReadyEvent();
  },

  raiseReadyEvent: function() {
    var spaceWidth = this.state.width;
    var eventData = {
      width: spaceWidth
    };

    EventDispatcher.dispatch('MultiTrack.TracksSpace.Ready', eventData);
  },

  render: function() {
    return (
      <div id="multi-track_tracks-space">
      </div>
    );
  }
});
