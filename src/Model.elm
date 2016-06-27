module Model exposing (Model, init)

import Hop.Types exposing (Query, Location)

import Action exposing (Action(..))
import Router exposing (Route)

type alias Model =
  { location : Location
  , route    : Route
  }

init : (Route, Location) -> (Model, Cmd Action)
init (route, location) =
  ( Model location route
  , Cmd.none
  )
