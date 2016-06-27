module Model exposing (Model, init)

import Hop.Types exposing (Query, Location)

import Msg exposing (Msg(..))
import Router exposing (Route)

type alias Model =
  { location : Location
  , route    : Route
  }

init : (Route, Location) -> (Model, Cmd Msg)
init (route, location) =
  ( Model location route
  , Cmd.none
  )
