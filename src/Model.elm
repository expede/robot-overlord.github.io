module Model exposing (Model, init)

import Hop.Types exposing (Query, Location)

import Signal exposing (Signal(..))
import Router.Route exposing (Route)

type alias Model =
  { location : Location
  , route    : Route
  }

init : (Route, Location) -> (Model, Cmd Signal)
init (route, location) =
  ( Model location route
  , Cmd.none
  )
