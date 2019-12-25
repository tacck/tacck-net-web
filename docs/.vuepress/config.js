module.exports = {
  title: 'Tacck.NET',
  description: 'tacck.net',
  themeConfig: {
    lastUpdated: 'Last Updated (JST)',
    nav: [{ text: 'Home', link: '/' }]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-89701884-5'
      }
    ],
    [
      'sidebar',
      {
        postItems: [
          ['https://meetup.tacck.net/', 'Meetups'],
          ['https://blog.tacck.net', 'Tech Blog']
        ]
      }
    ]
  ]
}
