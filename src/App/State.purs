module App.State where

import App.Config (config)
import App.Routes (Route, match)

data State = State
  { title       :: String
  , description :: String
  , route       :: Route
  , loaded      :: Boolean
  }

init :: String -> State
init url = State
  { title:       config.title
  , description: config.description
  , route:       match url
  , loaded:      false
  }
