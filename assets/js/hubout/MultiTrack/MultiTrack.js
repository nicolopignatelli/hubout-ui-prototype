/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.MultiTrack = React.createClass({
  render: function() {
    return (
      <div id="multi-track">
        <MultiTrack.Cursor />
        <MultiTrack.TracksSpace />
        <MultiTrack.VerticalZoomControl />
        <MultiTrack.HorizontalZoomControl />
        <MultiTrack.NewTrackButton />
        <div id="multi-track-footer"></div>
      </div>
    );
  }
});
