/** @jsx React.DOM */

var data = {
  videoSourceID: 'XZhPAgJXAxc',
  topics: [
    { // Topic 1, location question with 3 replies
      id:        'q1',
      createdAt: Date.now(),
      author:    'username',
      type:      'location',
      time:      10,
      duration:  5,
      body:      'Where has been this scene filmed?',
      tags:      ['#BaiaVerde', '#Gallipoli', '#Italy', '#Salento'],
      replies:   [
        {
          id:           'q1r1',
          author:       'username_best',
          body:         "It's a view from #BaiaVerde, a coast south of #Gallipoli, #Italy.",
          typedContent: '<iframe width="370" height="140" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=Baia%20Verde%2C%20LE%2C%20Italia&key=AIzaSyD3Lfw0pbP2yiZ-dXBo7cfwVS6QTpG6hoU"></iframe>',
          best:         true,
          likes:        5
        },
        {
          id:           'q1r2',
          author:       'username2',
          body:         "#Salento, for sure, but I can't say exactly where.",
          typedContent: null,
          best:         false,
          likes:        1
        },
        {
          id:           'q1r3',
          author:       'username3',
          body:         "I really don't know...",
          typedContent: null,
          best:         false,
          likes:        0
        }
      ]
    },
    { // Topic 2, question about song with 2 replies
      id:        'q2',
      createdAt: Date.now() - 100000,
      author:    'usernameq2',
      type:      'music',
      time:      25,
      duration:  10,
      body:      'I need to know the title of this song!',
      tags:      ['#JenniferLopez', '#Pitbull'],
      replies:   [
        {
          id:           'q2r1',
          author:       'usernameq2r1',
          body:         "#JenniferLopez - Liv it up feat. #Pitbull.",
          typedContent: '<iframe src="https://embed.spotify.com/?uri=spotify:track:4UXrcA0aP09rQh0eCwn5hx&theme=white&view=coverart" width="370" height="140" frameborder="0" allowtransparency="true"></iframe>',
          best:         true,
          likes:        10
        },
        {
          id:           'q2r2',
          author:       'usernameq2r2',
          body:         "Seems like #JenniferLopez",
          typedContent: null,
          best:         false,
          likes:        0
        }
      ]
    },
    { // Topic 3, advertising
      id:        'adv1',
      createdAt: Date.now() - 300000,
      author:    'advertiser1',
      type:      'advertising',
      time:      45,
      duration:  15,
      body:   {
        title:   'Pasta Barilla',
        content: '<div>some html</div>'
      },
      replies: []
    }
  ]
};

React.renderComponent(
  <Application videoSourceID={data.videoSourceID} topics={data.topics} />,
  document.getElementById('application-container')
);
