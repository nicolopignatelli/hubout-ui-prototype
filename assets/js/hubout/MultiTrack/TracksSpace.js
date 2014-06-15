/** @jsx React.DOM */
var MultiTrack = MultiTrack || {};
MultiTrack.TracksSpace = React.createClass({
  componentDidMount: function() {
    this.updateSize();
  },

  updateSize: function() {
    var node = $(this.getDOMNode());

    node.width(this.props.size.width);
    node.height(this.props.size.height);
  },

  getTracksHeight: function() {
    var numberOftypes   = this.getRegionTypes().length;
    var containerHeight = this.props.size.height;
    var borders         = 1 * (numberOftypes - 1); //1px bottom border * track (except last one)
    var availableHeight = containerHeight - borders;
    var height          = availableHeight / numberOftypes;

    return height;
  },

  getRegionTypes: function() {
    var types = [];

    for(i in this.props.regions) {
      var type = this.props.regions[i].type;

      if(-1 == types.indexOf(type)) {
        types.push(type);
      }
    };

    return types;
  },

  getRegionsByType: function(type) {
    var regions = [];

    for(i in this.props.regions) {
      var region = this.props.regions[i];

      if(region.type === type) {
        regions.push(region);
      }
    }

    return regions;
  },

  getTrackNodes: function() {
    var trackNodes      = [];
    var types           = this.getRegionTypes();
    var tracksSpaceSize = {width: this.props.size.width, height: this.getTracksHeight()};
    var duration        = this.props.videoSourceDuration;

    for(i in types) {
      var type      = types[i];
      var regions   = this.getRegionsByType(type);
      var node      = <MultiTrack.Track videoSourceDuration={duration} key={type} size={tracksSpaceSize} regions={regions} />;

      trackNodes.push(node);
    }

    return trackNodes;
  },

  render: function() {
    var trackNodes = this.getTrackNodes();

    return (
      <div id="multi-track_tracks-space">
        {trackNodes}
      </div>
    );
  }
});
