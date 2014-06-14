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
    var trackNodes = [];
    var types      = this.getRegionTypes();

    for(i in types) {
      var type      = types[i];
      var regions   = this.getRegionsByType(type);
      var node      = <MultiTrack.Track key={type} regions={regions} />;

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
