module App.State where

import App.Config (config)
import App.Routes (Route, match)

data State = State
  { title  :: String
  , route  :: Route
  , loaded :: Boolean
  }

init :: String -> State
init url = State
  { title:  config.title
  , route:  match url
  , loaded: false
  }
