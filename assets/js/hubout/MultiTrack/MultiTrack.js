/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.MultiTrack = React.createClass({
  render: function() {
    var cursorContainmentWidth = this.props.width;
    var tracksSpaceSize        = {width: 640, height: 290};

    return (
      <div id="multi-track">
        <MultiTrack.TracksSpace size={tracksSpaceSize} regions={this.props.regions} />
        <MultiTrack.Cursor containmentWidth={cursorContainmentWidth} />
        <MultiTrack.VerticalZoomControl />
        <MultiTrack.HorizontalZoomControl />
        <MultiTrack.NewTrackButton />
        <div id="multi-track-footer"></div>
      </div>
    );
  }
});
