module Router exposing (routerConfig, matchers, Route(..))

-- import Hop exposing (makeUrl, makeUrlFromLocation, matchUrl, setQuery)
import Hop.Types exposing (Config, Query, Location, PathMatcher, Router)
import Hop.Matchers exposing (..)

type Route
  = TopRoute
  | BodyRoute
  | NotFoundRoute

routerConfig : Config Route
routerConfig =
  { hash     = True
  , basePath = ""
  , matchers = matchers
  , notFound = NotFoundRoute
  }

matchers : List (PathMatcher Route)
matchers =
  [ match1 TopRoute  ""
  , match1 BodyRoute "/body"
  ]
