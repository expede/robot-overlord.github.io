module Action exposing (Action(..))

import Hop.Types exposing (Query)

type Action
  = NavigateTo String
  | SetQuery   Query
