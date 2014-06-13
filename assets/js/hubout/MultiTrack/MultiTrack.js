/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.MultiTrack = React.createClass({
  getInitialState: function() {
    return {
      width:  0,
      height: 0
    };
  },

  componentDidMount: function() {
    this.updateSize();
  },

  updateSize: function() {
    var node = $(this.getDOMNode());
    var w    = parseInt(node.width());
    var h    = parseInt(node.height()) - parseInt(node.children('#multi-track-footer').height());

    this.setState({
      width:  w,
      height: h
    });
  },

  render: function() {
    var cursorContainmentWidth = this.state.width;

    return (
      <div id="multi-track">
        <MultiTrack.TracksSpace />
        <MultiTrack.Cursor containmentWidth={cursorContainmentWidth} />
        <MultiTrack.VerticalZoomControl />
        <MultiTrack.HorizontalZoomControl />
        <MultiTrack.NewTrackButton />
        <div id="multi-track-footer"></div>
      </div>
    );
  }
});
