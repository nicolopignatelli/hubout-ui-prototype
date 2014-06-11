/** @jsx React.DOM */
var Application = React.createClass({
  render: function() {
    return (
      <div id="application">
          <VideoSource id={this.props.data.videoSourceID} />
          <MultiTrack.MultiTrack />
          <TopicRoll />
      </div>
    );
  }
});
