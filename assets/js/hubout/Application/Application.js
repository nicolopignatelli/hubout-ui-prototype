/** @jsx React.DOM */
var Application = React.createClass({
  mapRegions: function() {
    var regions = [];

    for(i in this.props.topics) {
      var topic = this.props.topics[i];
      var region = {
        id:        topic.id,
        type:      topic.type,
        time:      topic.time,
        duration:  topic.duration,
        body:      topic.body,
        tags:      topic.tags,
        replies:   topic.replies.length
      };

      regions.push(region);
    }

    return regions;
  },

  render: function() {
    var regions        = this.mapRegions();

    return (
      <div id="application">
          <VideoSource id={this.props.videoSourceID} />
          <MultiTrack.MultiTrack regions={regions} />
          <TopicRoll />
      </div>
    );
  }
});
