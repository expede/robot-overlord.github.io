exports.config = {
  title: 'Robot Overlord: Elixir and Elm Training',
  description: 'Functional programming corporate training. Languges, libraries, and techniques. Elixir, Elm, Clojure, React, Lodash, and beyond. Based out of Vancouver, Canada, we offer classes with expert instructors in both retreats and on-site.',
  public_path: process.env.NODE_ENV === 'production'
               ? '/dist/'
               : 'http://localhost:8080/static/dist/'
}
