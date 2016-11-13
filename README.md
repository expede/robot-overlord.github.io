# Robot Overlord Website
This is the website source for Robot Overlord Software

## Set Up
```bash
brew install elm
npm install -g elm-css elm-github-install uglify-js
```

## Development
Being an organization page, the `master` branch is the deploy, not `gh-pages`.
If you want to do development, we have a `dev` branch that you should treat as master.

## Deploy
One liner: `git subtree push --prefix resources/public/ origin gh-pages`

## Elm

```bash
# Add offical Elm packages
elm package install <foo>

# Note that to add a package from GitHub, you must first
# add it to `elm-package.json` in format "<user>/<reponame>": "<min> <= v <max>"

# Run package build plan in general
elm-github-install

# Update JS
elm make src/Main.elm --output=./static/app.js

# Optimize & minify JS
uglifyjs ./static/app.js -o ./static/app.js --mangle --compress

# Update CSS
elm-css src/View/Stylesheets.elm
```
