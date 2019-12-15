module.exports = {
  title: 'Tacck.NET',
  description: 'tacck.net',
  ga: 'UA-89701884-5',
  themeConfig: {
    lastUpdated: 'Last Updated (JST)',
    nav: [
      { text: 'Home', link: '/' }
    ]
  },
  plugins: [
    [
      'sidebar', {
        postItems: [
          ['https://meetup.tacck.net/', 'Meetups'],
          ['https://blog.tacck.net', 'Tech Blog']
        ]
      }
    ]
  ]
}
