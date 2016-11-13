module Model exposing (Model, init)

import Hop.Types exposing (Address, Query)

import Signal exposing (Signal(..))
import Router.Route exposing (Route)

type alias Model =
  { address : Address
  , route   : Route
  }

init : (Route, Address) -> (Model, Cmd Signal)
init (route, location) =
  ( Model location route
  , Cmd.none
  )
