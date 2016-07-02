module Signal exposing (Signal(..))

-- import Hop.Types exposing (Query)
import Router.Route exposing (Route(..))

type Signal
  = NavigateTo Route
