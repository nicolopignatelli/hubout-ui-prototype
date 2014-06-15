/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.Track = React.createClass({
  componentDidMount: function() {
    this.updateSize();
  },

  updateSize: function() {
    var node = $(this.getDOMNode());

    node.height(this.props.size.height);
  },

  getRegionNodes: function() {
    var duration    = this.props.videoSourceDuration;
    var trackWidth  = this.props.size.width;
    var regionNodes = this.props.regions.map(function(region) {
      return <MultiTrack.Region key={region.id} data={region} videoSourceDuration={duration} trackWidth={trackWidth} />
    });
    
    return regionNodes;
  },

  render: function() {
    var regionNodes = this.getRegionNodes();
    var classes     = 'track ' + this.props.key;

    return (
      <div className={classes}>
        {regionNodes}
      </div>
    );
  }
});
