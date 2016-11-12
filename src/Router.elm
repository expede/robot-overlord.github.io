module Router exposing (routerConfig)

import Hop.Types exposing (Config)

import Router.Route exposing (Route(NotFound))
import Router.Match exposing (matchers)

routerConfig : Config
routerConfig =
  { hash     = True
  , basePath = ""
  -- , matchers = matchers
  -- , notFound = NotFound
  }
